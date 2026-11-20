import type { ProjectScreenshot } from '../types/Project.ts';

type ProjectGalleryProps = {
    screenshots: ProjectScreenshot[];
};

export default function ProjectGallery({ screenshots }: ProjectGalleryProps) {
    return (
        <section className="project-gallery" aria-labelledby="project-gallery-heading">
            <h2 id="project-gallery-heading">Gallery</h2>

            <div className="project-gallery-grid">
                {screenshots.map((screenshot) => (
                    <figure key={screenshot.src}>
                        <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            loading="lazy"
                            decoding="async"
                        />
                        <figcaption>{screenshot.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
