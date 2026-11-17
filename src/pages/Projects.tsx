import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <>
            <p className="eyebrow">Selected work / {projects.length} projects</p>

            <h1>Things I’ve built.</h1>

            <p className="intro">
                Projects where I turn ideas into working applications
                and explore new ways to build.
            </p>

            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}