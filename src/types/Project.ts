export type Project = {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    status: 'In progress' | 'Built';
};
