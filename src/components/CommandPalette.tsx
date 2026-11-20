import { useEffect, useMemo, useRef, useState } from 'react';
import type {
    ChangeEvent,
    KeyboardEvent as ReactKeyboardEvent,
    MouseEvent,
} from 'react';
import { useNavigate } from 'react-router';
import { navigationItems } from '../data/navigation.ts';
import { projects } from '../data/projects.ts';

type CommandItem = {
    id: string;
    label: string;
    path: string;
    group: 'Page' | 'Project';
    keywords: string[];
};

const commands: CommandItem[] = [
    ...navigationItems.map((item) => ({
        id: `page-${item.path}`,
        label: item.label,
        path: item.path,
        group: 'Page' as const,
        keywords: item.keywords,
    })),
    ...projects.map((project) => ({
        id: `project-${project.id}`,
        label: project.name,
        path: `/projects/${project.id}`,
        group: 'Project' as const,
        keywords: ['project', ...project.technologies],
    })),
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const filteredCommands = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return commands;
        }

        return commands.filter((command) =>
            [command.label, ...command.keywords]
                .join(' ')
                .toLowerCase()
                .includes(normalizedQuery),
        );
    }, [query]);

    useEffect(() => {
        function handleShortcut(event: KeyboardEvent) {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
                event.preventDefault();

                if (isOpen) {
                    closePalette();
                } else {
                    openPalette();
                }
            }
        }

        window.addEventListener('keydown', handleShortcut);

        return () => window.removeEventListener('keydown', handleShortcut);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        inputRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    function openPalette() {
        setQuery('');
        setActiveIndex(0);
        setIsOpen(true);
    }

    function closePalette(restoreFocus = true) {
        setIsOpen(false);
        setQuery('');

        if (restoreFocus) {
            requestAnimationFrame(() => triggerRef.current?.focus());
        }
    }

    function selectCommand(command: CommandItem) {
        closePalette(false);
        navigate(command.path);
    }

    function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
        setActiveIndex(0);
    }

    function handleSearchKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
        if (filteredCommands.length === 0) {
            return;
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveIndex((currentIndex) =>
                currentIndex === filteredCommands.length - 1 ? 0 : currentIndex + 1,
            );
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveIndex((currentIndex) =>
                currentIndex === 0 ? filteredCommands.length - 1 : currentIndex - 1,
            );
        }

        if (event.key === 'Enter') {
            event.preventDefault();
            const activeCommand = filteredCommands[activeIndex];

            if (activeCommand) {
                selectCommand(activeCommand);
            }
        }
    }

    function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closePalette();
            return;
        }

        if (event.key !== 'Tab') {
            return;
        }

        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
            'button:not([tabindex="-1"]), input',
        );

        if (!focusableElements || focusableElements.length === 0) {
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
        }
    }

    function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            closePalette();
        }
    }

    return (
        <>
            <button
                className="command-palette-trigger"
                type="button"
                ref={triggerRef}
                onClick={openPalette}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
            >
                <span>Search</span>
                <kbd>⌘ K</kbd>
            </button>

            {isOpen && (
                <div className="command-palette-overlay" onMouseDown={handleOverlayClick}>
                    <div
                        className="command-palette"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="command-palette-title"
                        ref={dialogRef}
                        onKeyDown={handleDialogKeyDown}
                    >
                        <div className="command-palette-header">
                            <div>
                                <p>Workspace search</p>
                                <h2 id="command-palette-title">Go to a page or project</h2>
                            </div>
                            <button type="button" onClick={() => closePalette()}>
                                Close
                            </button>
                        </div>

                        <label className="command-palette-search">
                            <span className="visually-hidden">Search pages and projects</span>
                            <input
                                ref={inputRef}
                                type="search"
                                value={query}
                                placeholder="Search pages and projects"
                                role="combobox"
                                aria-autocomplete="list"
                                aria-controls="command-palette-results"
                                aria-expanded="true"
                                aria-activedescendant={
                                    filteredCommands[activeIndex]
                                        ? `command-${filteredCommands[activeIndex].id}`
                                        : undefined
                                }
                                onChange={handleQueryChange}
                                onKeyDown={handleSearchKeyDown}
                            />
                        </label>

                        <div
                            className="command-palette-results"
                            id="command-palette-results"
                            role="listbox"
                            aria-label="Navigation results"
                        >
                            {filteredCommands.length > 0 ? (
                                filteredCommands.map((command, index) => (
                                    <button
                                        className={index === activeIndex ? 'is-active' : ''}
                                        id={`command-${command.id}`}
                                        key={command.id}
                                        type="button"
                                        role="option"
                                        aria-selected={index === activeIndex}
                                        tabIndex={-1}
                                        onClick={() => selectCommand(command)}
                                        onMouseEnter={() => setActiveIndex(index)}
                                    >
                                        <span>{command.label}</span>
                                        <small>{command.group}</small>
                                    </button>
                                ))
                            ) : (
                                <p className="command-palette-empty" role="status">
                                    No pages or projects match “{query}”.
                                </p>
                            )}
                        </div>

                        <p className="command-palette-help">
                            Use Up and Down Arrow to move, Enter to open, and Escape to close.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
