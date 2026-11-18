import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import { projects } from '../data/projects';
import { Navigate, useParams } from 'react-router';

export default function Projects() {
    const { projectId } = useParams();

    if (projectId) {
      const selectedProject = projects.find((project) => project.id === projectId);

      if (!selectedProject) {
          return <Navigate to="/projects" replace />;
      }

      return <ProjectDetails project={selectedProject} />;
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
                    />
                ))}
            </div>
        </>
    );
}
