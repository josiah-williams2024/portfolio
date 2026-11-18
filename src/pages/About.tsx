import { Link } from 'react-router';

export default function About() {
    return (
        <div className="about-page">
            <header className="about-header">
                <p className="eyebrow">Behind the code</p>
                <h1>A little about me.</h1>
                <p className="about-intro">
                    I’m a software developer and Software Engineering Technology
                    student who enjoys turning ideas into useful, maintainable
                    applications.
                </p>
            </header>

            <div className="about-grid">
                <section className="about-section">
                    <p className="about-section-number">01</p>
                    <h2>My background</h2>
                    <p>
                        I’m studying Software Engineering Technology at Conestoga
                        College and gaining professional experience as a Software
                        Developer at Vehikl.
                    </p>
                    <p>
                        My work has given me experience building and troubleshooting
                        applications with Laravel, Vue, TypeScript, and PostgreSQL.
                    </p>
                </section>

                <section className="about-section">
                    <p className="about-section-number">02</p>
                    <h2>What interests me</h2>
                    <p>
                        I’m interested in applications that make complicated
                        information easier to understand and act on. CodeSmellTrainer
                        explores maintainable code, while SpendTempo explores clearer
                        day-to-day budgeting.
                    </p>
                    <p>
                        I also enjoy learning how frontend decisions, backend design,
                        and data structure choices work together.
                    </p>
                </section>

                <section className="about-section">
                    <p className="about-section-number">03</p>
                    <h2>How I work</h2>
                    <p>
                        I like to begin with a small working version, learn from it,
                        and improve it in focused steps.
                    </p>
                    <p>
                        Collaboration is an important part of that process. Code
                        reviews, testing, pair or mob programming, and conversations
                        with stakeholders help me make stronger decisions.
                    </p>
                </section>
            </div>

            <section className="about-next">
                <p className="eyebrow">Keep exploring</p>
                <h2>See what I’ve been building.</h2>

                <div className="overview-actions">
                    <Link className="primary-link" to="/projects">
                        View my projects ↗
                    </Link>

                    <Link className="secondary-link" to="/contact">
                        Contact me
                    </Link>
                </div>
            </section>
        </div>
    );
}
