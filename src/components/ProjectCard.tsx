import type { Project } from '../types/Project.ts';
import { Link } from 'react-router';

type ProjectCardProps = {
    project: Project;
    headingLevel?: 'h2' | 'h3';
};

export default function ProjectCard({
    project,
    headingLevel = 'h2',
}: ProjectCardProps) {
    const Heading = headingLevel;

    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-label">Project</span>

                <span className="project-status">{project.status}</span>
            </div>

            <Heading>{project.name}</Heading>
            <p className="project-description">{project.description}</p>

            <ul className="project-technologies" aria-label="Technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            <Link
                className="project-button"
                to={`/projects/${project.id}`}
                aria-label={`View details for ${project.name}`}
            >
                View project ↗
            </Link>
        </article>
    );
}
