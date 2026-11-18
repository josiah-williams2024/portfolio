import type { Experience } from '../types/Experience.ts';

export const experience: Experience = {
    company: 'Vehikl',
    role: 'Software Developer Co-op',
    period: 'May 2026 - Present',
    summary:
        'Building and troubleshooting Laravel and Vue applications while collaborating with stakeholders and a four-person agile team.',
    responsibilities: [
        'Developed Laravel API endpoints with request validation and activity logging to support new application features and troubleshooting.',
        'Investigated PostgreSQL queries and Laravel Nova timeouts using execution plans and index testing, identifying an invalid production index.',
        'Developed member status, absence, and field trip features for an internal planning application used daily by the team to track availability.',
        'Built CodeSmellTrainer with Laravel and Vue.js to help new hires practise identifying code smells through interactive exercises, performance tracking, and leaderboards.',
        'Collaborated with client stakeholders to clarify requirements and deliver features through code reviews, testing, and mob programming.',
    ],
    technologies: [
        'Laravel',
        'Vue.js',
        'PHP',
        'TypeScript',
        'PostgreSQL',
        'Laravel Nova',
    ],
    lessons: [
        'Strengthened my debugging process by using query execution plans and controlled index testing to investigate performance problems.',
        'Learned to turn stakeholder requirements into maintainable features while working within an agile team.',
        'Improved how I communicate and share implementation decisions through code reviews, testing, and mob programming.',
    ],
};
