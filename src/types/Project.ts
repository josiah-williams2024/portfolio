export type ProjectScreenshot = {
    src: string;
    alt: string;
    caption: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    preview?: {
        src: string;
        alt: string;
    };
    screenshots?: ProjectScreenshot[];
    githubUrl?: string;
    technologies: string[];
    status: 'In progress' | 'Built';
    problem: string;
    features: string[];
    technicalDecisions: string[];
    challenges: string[];
    lessons: string[];
};
