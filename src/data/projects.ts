import type { Project } from '../types/Project.ts';

export const projects: Project[] = [
    {
        id: 'code-smell-trainer',
        name: 'CodeSmellTrainer',
        description:
            'An interactive game for recognising code smells, with scores, stats, and leaderboards.',
        technologies: ['Laravel', 'Vue', 'TypeScript'],
        status: 'Built',
        problem:
            'I wanted a way to practise spotting code smells in real snippets and get immediate feedback on why a piece of code might be hard to maintain.',
        features: [
            'Play decks covering six code smells, including Long Method, Duplication, and Magic Numbers.',
            'Classify syntax-highlighted snippets using arrow keys or on-screen buttons, then read an explanation for each answer.',
            'Save attempts and review score, accuracy, and time by deck.',
            'Compare scores on daily, weekly, and all-time leaderboards, or review code smells on the study page.',
        ],
        technicalDecisions: [
            'Used Laravel for decks, cards, and saved game results, with Vue handling keyboard input and gameplay.',
            'Used Shiki to make snippets easier to scan and give them the syntax highlighting you would see in an editor.',
            'Linked each deck to a code smell so gameplay and study content could use the same definitions.',
        ],
        challenges: [
            'Writing short snippets that make one code smell clear enough to classify and explain.',
            'Seeding related records in the right order so each deck could reference an existing code smell.',
        ],
        lessons: [
            'Building the Long Method deck first gave me a complete gameplay loop to build on before adding more decks, stats, and leaderboards.',
            'Writing the explanations made me think about how each code smell makes a change harder, which gave players more useful feedback.',
        ],
    },
    {
        id: 'spend-tempo',
        name: 'SpendTempo',
        description:
            'A calendar-based budget app for tracking income, expenses, and daily spending goals.',
        technologies: ['React', 'TypeScript', 'Laravel'],
        status: 'In progress',
        problem:
            'I wanted to see how my spending changes from day to day and quickly tell which days are within my budget.',
        features: [
            'The React frontend is set up for development.',
            'The planned calendar uses colour to show which days are within a spending goal.',
            'Planned weekly and monthly averages will help put individual spending days in context.',
        ],
        technicalDecisions: [
            'Started with a React web app and chose Laravel for the backend.',
            'Made the calendar the main view so spending can be reviewed by date.',
        ],
        challenges: [
            'Designing a calendar that stays readable on a phone while showing daily totals and spending status.',
            'Deciding how to represent days with no transactions so they make sense in weekly and monthly averages.',
        ],
        lessons: [
            'Starting with the calendar clarified what the app needs for each day, including a date, a spending total, and a goal.',
        ],
    },
    {
        id: 'portfolio',
        name: 'Developer Workspace',
        description:
            'This interactive portfolio, built to explore my projects and practise React.',
        technologies: ['React', 'TypeScript', 'CSS'],
        status: 'In progress',
        problem:
            'I wanted one place to show what I built and explain the decisions and lessons behind each project while getting more practice with React.',
        features: [
            'A workspace-style layout with a sidebar for browsing projects.',
            'Project entries that show the tech stack, build status, and the story behind each project.',
        ],
        technicalDecisions: [
            'Defined a shared TypeScript Project type so every project follows the same content structure.',
            'Kept project content in a data file so React components can render each entry from the same fields.',
            'Used CSS Grid for the sidebar and main content layout.',
        ],
        challenges: [
            'Making the workspace layout easy to navigate for someone visiting the portfolio for the first time.',
            'Writing project summaries that explain what I built and why without burying the main points.',
        ],
        lessons: [
            'Adding fields for problems, decisions, challenges, and lessons helped me explain what each project taught me.',
        ],
    },
];