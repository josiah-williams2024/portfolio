export type NavigationItem = {
    label: string;
    path: string;
    keywords: string[];
};

export const navigationItems: NavigationItem[] = [
    { label: 'Overview', path: '/', keywords: ['home', 'introduction'] },
    { label: 'Projects', path: '/projects', keywords: ['work', 'portfolio'] },
    { label: 'Experience', path: '/experience', keywords: ['work', 'vehikl'] },
    { label: 'About', path: '/about', keywords: ['background', 'developer'] },
    { label: 'Contact', path: '/contact', keywords: ['email', 'github', 'linkedin'] },
];
