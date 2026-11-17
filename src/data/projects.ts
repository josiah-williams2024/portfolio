import type { Project } from '../types/Project.ts';

export const projects: Project[] = [
    {
        id: 'code-smell-trainer',
        name: 'CodeSmellTrainer',
        description:
            'An interactive game for recognising code smells, with scores, stats, and leaderboards.',
        technologies: ['Laravel', 'Vue', 'TypeScript'],
        status: 'Built',
    },
    {
        id: 'spend-tempo',
        name: 'SpendTempo',
        description:
            'A calendar-based budget app for tracking income, expenses, and daily spending goals.',
        technologies: ['React', 'TypeScript', 'Laravel'],
        status: 'In progress',
    },
    {
        id: 'portfolio',
        name: 'Developer Workspace',
        description:
            'This interactive portfolio, built to explore my projects and practise React.',
        technologies: ['React', 'TypeScript', 'CSS'],
        status: 'In progress',
    },
];