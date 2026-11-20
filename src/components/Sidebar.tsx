import { NavLink } from 'react-router';
import { navigationItems } from '../data/navigation.ts';

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
