export type Project = {
    id: string;
    name: string;
    description: string;
    preview?: {
        src: string;
        alt: string;
    };
    githubUrl?: string;
    technologies: string[];
    status: 'In progress' | 'Built';
    problem: string;
    features: string[];
    technicalDecisions: string[];
    challenges: string[];
    lessons: string[];
};
