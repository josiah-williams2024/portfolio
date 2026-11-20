import type { Project } from '../types/Project.ts';
import { Link } from 'react-router';

type ProjectDetailsProps = {
    project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <article className="project-details">
            <Link className="project-back-button" to="/projects">
                ← All projects
            </Link>

            <div className="project-details-heading">
                <p className="eyebrow">Project details</p>
                <span className="project-status">{project.status}</span>
            </div>

            <h1>{project.name}</h1>
            <p className="project-details-description">{project.description}</p>

            {project.preview && (
                <img
                    className="project-details-preview"
                    src={project.preview.src}
                    alt={project.preview.alt}
                    decoding="async"
                />
            )}

            <h2>Technologies</h2>
            <ul className="project-technologies" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            {project.githubUrl && (
                <a
                    className="project-source-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} source code on GitHub (opens in a new tab)`}
                >
                    View source on GitHub
                </a>
            )}

            <div className="project-case-study">
                <section>
                    <h2>Problem</h2>
                    <p>{project.problem}</p>
                </section>

                <section>
                    <h2>Features</h2>
                    <ul>
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Technical decisions</h2>
                    <ul>
                        {project.technicalDecisions.map((decision) => (
                            <li key={decision}>{decision}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Challenges</h2>
                    <ul>
                        {project.challenges.map((challenge) => (
                            <li key={challenge}>{challenge}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Lessons learned</h2>
                    <ul>
                        {project.lessons.map((lesson) => (
                            <li key={lesson}>{lesson}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </article>
    );
}
