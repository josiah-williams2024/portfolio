import type { Project } from '../types/Project.ts';

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <div className="project-card-top">
                <span className="project-label">Project</span>

                <span className="project-status">{project.status}</span>
            </div>

            <h2>{project.name}</h2>
            <p className="project-description">{project.description}</p>

            <ul className="project-technologies" aria-label="Technologies">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </article>
    );
}