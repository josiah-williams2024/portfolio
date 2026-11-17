import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import { projects } from '../data/projects';
import type { Project } from '../types/Project.ts';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    if (selectedProject) {
        return (
            <ProjectDetails
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
            />
        );
    }

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
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onOpen={setSelectedProject}
                    />
                ))}
            </div>
        </>
    );
}
