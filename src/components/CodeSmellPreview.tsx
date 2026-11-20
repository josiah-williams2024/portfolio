import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import {
    codeSmellQuestions,
    type CodeSmellAnswer,
} from '../data/codeSmellQuestions.ts';

const answers: { id: CodeSmellAnswer; label: string }[] = [
    { id: 'short', label: 'Short method' },
    { id: 'long', label: 'Long method' },
];

export default function CodeSmellPreview() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<CodeSmellAnswer | null>(null);
    const [score, setScore] = useState(0);
    const roundHeadingRef = useRef<HTMLHeadingElement>(null);
    const shouldMoveFocus = useRef(false);
    const isComplete = questionIndex === codeSmellQuestions.length;
    const currentQuestion = codeSmellQuestions[questionIndex];

    useEffect(() => {
        if (shouldMoveFocus.current) {
            roundHeadingRef.current?.focus();
            shouldMoveFocus.current = false;
        }
    }, [questionIndex]);

    function handleAnswer(answer: CodeSmellAnswer) {
        if (selectedAnswer || isComplete || !currentQuestion) {
            return;
        }

        setSelectedAnswer(answer);

        if (answer === currentQuestion.correctAnswer) {
            setScore((currentScore) => currentScore + 1);
        }
    }

    function handleNextQuestion() {
        shouldMoveFocus.current = true;
        setSelectedAnswer(null);
        setQuestionIndex((currentIndex) => currentIndex + 1);
    }

    function handleRestart() {
        shouldMoveFocus.current = true;
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setScore(0);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
        if (selectedAnswer || isComplete) {
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            handleAnswer('short');
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            handleAnswer('long');
        }
    }

    if (isComplete) {
        return (
            <section className="code-smell-preview code-smell-results">
                <p className="code-smell-kicker">Interactive sample</p>
                <h2 ref={roundHeadingRef} tabIndex={-1}>
                    Training complete
                </h2>
                <p className="code-smell-final-score">
                    You scored <strong>{score} out of {codeSmellQuestions.length}</strong>.
                </p>
                <p>
                    This sample demonstrates the core classification loop. The full
                    project includes additional decks, saved attempts, statistics,
                    and leaderboards.
                </p>
                <button type="button" onClick={handleRestart}>
                    Play again
                </button>
            </section>
        );
    }

    if (!currentQuestion) {
        return null;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    return (
        <section className="code-smell-preview" onKeyDown={handleKeyDown}>
            <div className="code-smell-preview-header">
                <div>
                    <p className="code-smell-kicker">Interactive sample</p>
                    <h2 ref={roundHeadingRef} tabIndex={-1}>
                        Is this a short or long method?
                    </h2>
                </div>
                <p className="code-smell-progress">
                    Question {questionIndex + 1} of {codeSmellQuestions.length}
                    <span>Score: {score}</span>
                </p>
            </div>

            <p className="code-smell-question-title">{currentQuestion.title}</p>
            <pre aria-label={`PHP sample: ${currentQuestion.title}`} tabIndex={0}>
                <code>{currentQuestion.snippet}</code>
            </pre>

            <div className="code-smell-answers" aria-label="Choose an answer">
                {answers.map((answer) => {
                    const answerIsCorrect = answer.id === currentQuestion.correctAnswer;
                    const answerIsSelected = answer.id === selectedAnswer;
                    const answerClass = selectedAnswer
                        ? answerIsCorrect
                            ? 'is-correct'
                            : answerIsSelected
                              ? 'is-incorrect'
                              : ''
                        : '';

                    return (
                        <button
                            className={answerClass}
                            key={answer.id}
                            type="button"
                            aria-pressed={answerIsSelected}
                            aria-disabled={selectedAnswer !== null}
                            onClick={() => handleAnswer(answer.id)}
                        >
                            {answer.label}
                        </button>
                    );
                })}
            </div>

            <p className="code-smell-keyboard-hint">
                Keyboard: Left Arrow selects short; Right Arrow selects long.
            </p>

            {selectedAnswer && (
                <div
                    className={`code-smell-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`}
                    role="status"
                    aria-live="polite"
                >
                    <p>
                        <strong>{isCorrect ? 'Correct.' : 'Not quite.'}</strong>{' '}
                        {currentQuestion.explanation}
                    </p>
                    <button type="button" onClick={handleNextQuestion}>
                        {questionIndex === codeSmellQuestions.length - 1
                            ? 'See results'
                            : 'Next question'}
                    </button>
                </div>
            )}
        </section>
    );
}
