export type SampleExpense = {
    id: string;
    description: string;
    category: string;
    amount: number;
};

export type SampleBudgetDay = {
    date: string;
    dateLabel: string;
    weekday: string;
    dayNumber: number;
    expenses: SampleExpense[];
};

export const sampleDailyLimit = 75;

export const spendTempoSampleDays: SampleBudgetDay[] = [
    {
        date: '2026-11-16',
        dateLabel: 'Monday, November 16',
        weekday: 'Mon',
        dayNumber: 16,
        expenses: [
            { id: 'groceries-16', description: 'Groceries', category: 'Groceries', amount: 38.25 },
            { id: 'transit-16', description: 'Bus fare', category: 'Transport', amount: 4.5 },
        ],
    },
    {
        date: '2026-11-17',
        dateLabel: 'Tuesday, November 17',
        weekday: 'Tue',
        dayNumber: 17,
        expenses: [
            { id: 'coffee-17', description: 'Coffee', category: 'Dining', amount: 5.75 },
            { id: 'lunch-17', description: 'Lunch', category: 'Dining', amount: 16.8 },
            { id: 'book-17', description: 'Programming book', category: 'Other', amount: 24.99 },
        ],
    },
    {
        date: '2026-11-18',
        dateLabel: 'Wednesday, November 18',
        weekday: 'Wed',
        dayNumber: 18,
        expenses: [],
    },
    {
        date: '2026-11-19',
        dateLabel: 'Thursday, November 19',
        weekday: 'Thu',
        dayNumber: 19,
        expenses: [
            { id: 'groceries-19', description: 'Weekly groceries', category: 'Groceries', amount: 62.4 },
            { id: 'dinner-19', description: 'Dinner', category: 'Dining', amount: 29.5 },
        ],
    },
    {
        date: '2026-11-20',
        dateLabel: 'Friday, November 20',
        weekday: 'Fri',
        dayNumber: 20,
        expenses: [
            { id: 'transit-20', description: 'Bus fare', category: 'Transport', amount: 4.5 },
            { id: 'lunch-20', description: 'Lunch', category: 'Dining', amount: 14.25 },
        ],
    },
];
