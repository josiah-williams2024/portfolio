import { Link } from 'react-router';
import ProjectCard from '../components/ProjectCard.tsx';
import { projects } from '../data/projects.ts';

const featuredProjectIds = ['code-smell-trainer', 'spend-tempo'];

export default function Overview() {
    const featuredProjects = projects.filter((project) =>
        featuredProjectIds.includes(project.id),
    );
    const currentProject = projects.find((project) => project.id === 'spend-tempo');

    return (
        <div className="overview">
            <section className="overview-hero">
                <p className="eyebrow">Hello, I’m Josiah</p>

                <h1>
                    Thoughtful code.
                    <br />
                    Useful experiences.
                </h1>

                <p className="intro">
                    I’m a software developer building applications with React,
                    Vue, and Laravel.
                </p>

                <div className="overview-actions">
                    <Link className="primary-link" to="/projects">
                        Explore my projects ↗
                    </Link>

                    <Link className="secondary-link" to="/contact">
                        Get in touch
                    </Link>
                </div>
            </section>

            <section
                className="overview-summary"
                aria-label="Experience and current work"
            >
                <article className="overview-panel">
                    <p className="overview-panel-label">Experience</p>
                    <h2>Software Developer</h2>
                    <p>
                        My work and growth as a Software Developer at Vehikl.
                    </p>
                    <Link to="/experience">View my experience →</Link>
                </article>

                {currentProject && (
                    <article className="overview-panel">
                        <p className="overview-panel-label">Currently building</p>
                        <h2>{currentProject.name}</h2>
                        <p>{currentProject.description}</p>
                        <Link to={`/projects/${currentProject.id}`}>
                            View {currentProject.name} →
                        </Link>
                    </article>
                )}
            </section>

            <section className="overview-featured">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2>Featured projects</h2>
                    </div>

                    <Link to="/projects">All projects →</Link>
                </div>

                <div className="project-grid">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            headingLevel="h3"
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
