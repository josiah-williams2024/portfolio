import { NavLink } from 'react-router';

const navigationItems = [
    { path: '/', label: 'Overview' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
];

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <NavLink className="brand" to="/">
                JW<span>.</span>
            </NavLink>

            <p className="sidebar-label">Workspace</p>

            <nav aria-label="Main navigation">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
