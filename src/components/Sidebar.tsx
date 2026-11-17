import type {Page} from '../types/Page.ts';

type SidebarProps = {
    activePage: Page;
    onPageChange: (page: Page) => void;
};

const navigationItems: { id: Page; label: string }[] = [
    {id: 'overview', label: 'Overview'},
    {id: 'projects', label: 'Project'},
    {id: 'experience', label: 'Experience'},
    {id: 'about', label: 'About'},
    {id: 'contact', label: 'Contact'},
];

export default function Sidebar({ activePage, onPageChange, }: SidebarProps) {
    return (
        <aside className="sidebar">
            <a className="brand" href="/">
                JW<span>.</span>
            </a>

            <p className="sidebar-label">Workspace</p>

            <nav aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => onPageChange(item.id)}
                        aria-current={activePage === item.id ? 'page' : undefined}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}