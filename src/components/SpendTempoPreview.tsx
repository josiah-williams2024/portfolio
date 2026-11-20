import { useState } from 'react';
import {
    sampleDailyLimit,
    spendTempoSampleDays,
} from '../data/spendTempoSample.ts';

const currencyFormatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
});

function formatCurrency(amount: number) {
    return currencyFormatter.format(amount);
}

function totalForDay(date: string) {
    const day = spendTempoSampleDays.find((item) => item.date === date);

    return day?.expenses.reduce((total, expense) => total + expense.amount, 0) ?? 0;
}

export default function SpendTempoPreview() {
    const [selectedDate, setSelectedDate] = useState(spendTempoSampleDays[0]?.date ?? '');
    const selectedDay =
        spendTempoSampleDays.find((day) => day.date === selectedDate) ??
        spendTempoSampleDays[0];

    if (!selectedDay) {
        return null;
    }

    const dailyTotal = selectedDay.expenses.reduce(
        (total, expense) => total + expense.amount,
        0,
    );
    const remainingAmount = sampleDailyLimit - dailyTotal;
    const isOverLimit = remainingAmount < 0;

    return (
        <section
            className="spend-tempo-preview"
            aria-labelledby="spend-tempo-preview-heading"
        >
            <div className="spend-tempo-preview-header">
                <div>
                    <p className="spend-tempo-kicker">Interactive sample</p>
                    <h2 id="spend-tempo-preview-heading">Explore a sample week</h2>
                </div>
                <div className="spend-tempo-limit">
                    <span>Daily limit</span>
                    <strong>{formatCurrency(sampleDailyLimit)}</strong>
                </div>
            </div>

            <p className="spend-tempo-sample-notice">
                Illustrative sample data only. Selections are not saved.
            </p>

            <div className="spend-tempo-days" aria-label="Select a sample day">
                {spendTempoSampleDays.map((day) => {
                    const total = totalForDay(day.date);
                    const isSelected = day.date === selectedDate;

                    return (
                        <button
                            className={total > sampleDailyLimit ? 'is-over-limit' : ''}
                            key={day.date}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={`${day.dateLabel}, ${formatCurrency(total)} spent`}
                            onClick={() => setSelectedDate(day.date)}
                        >
                            <span>{day.weekday}</span>
                            <strong>{day.dayNumber}</strong>
                            <small>{formatCurrency(total)}</small>
                        </button>
                    );
                })}
            </div>

            <div className="spend-tempo-day-details" aria-live="polite">
                <div className="spend-tempo-day-summary">
                    <div>
                        <p>Selected day</p>
                        <h3>{selectedDay.dateLabel}</h3>
                    </div>
                    <div className="spend-tempo-total">
                        <span>Spent</span>
                        <strong>{formatCurrency(dailyTotal)}</strong>
                        <small className={isOverLimit ? 'is-over-limit' : ''}>
                            {isOverLimit
                                ? `${formatCurrency(Math.abs(remainingAmount))} over limit`
                                : `${formatCurrency(remainingAmount)} remaining`}
                        </small>
                    </div>
                </div>

                {selectedDay.expenses.length > 0 ? (
                    <ul className="spend-tempo-expenses">
                        {selectedDay.expenses.map((expense) => (
                            <li key={expense.id}>
                                <div>
                                    <strong>{expense.description}</strong>
                                    <span>{expense.category}</span>
                                </div>
                                <span>{formatCurrency(expense.amount)}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="spend-tempo-empty-state">
                        No spending recorded. The full daily limit is still available.
                    </p>
                )}
            </div>
        </section>
    );
}
