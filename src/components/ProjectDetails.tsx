import type { Project } from '../types/Project.ts';

type ProjectDetailsProps = {
    project: Project;
    onBack: () => void;
};

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
    return (
        <article className="project-details">
            <button className="project-back-button" type="button" onClick={onBack}>
                ← All projects
            </button>

            <div className="project-details-heading">
                <p className="eyebrow">Project details</p>
                <span className="project-status">{project.status}</span>
            </div>

            <h1>{project.name}</h1>
            <p className="project-details-description">{project.description}</p>

            <h2>Technologies</h2>
            <ul className="project-technologies" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </article>
    );
}
