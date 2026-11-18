import { experience } from '../data/experience.ts';

export default function Experience() {
    return (
        <div className="experience-page">
            <header className="experience-header">
                <p className="eyebrow">Learning through building</p>
                <h1>My experience.</h1>
                <p className="intro">{experience.summary}</p>
            </header>

            <article className="experience-entry">
                <div className="experience-meta">
                    <div>
                        <p className="experience-company">{experience.company}</p>
                        <h2>{experience.role}</h2>
                    </div>

                    <p className="experience-period">{experience.period}</p>
                </div>

                <section>
                    <h3>Responsibilities</h3>
                    <ul className="experience-list">
                        {experience.responsibilities.map((responsibility) => (
                            <li key={responsibility}>{responsibility}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3>Technologies</h3>
                    <ul
                        className="project-technologies"
                        aria-label="Technologies used at Vehikl"
                    >
                        {experience.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h3>What I learned</h3>
                    <ul className="experience-list">
                        {experience.lessons.map((lesson) => (
                            <li key={lesson}>{lesson}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </div>
    );
}
