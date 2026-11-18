const contactLinks = [
    {
        label: 'Email',
        value: 'josiah.williams.dev@gmail.com',
        href: 'mailto:josiah.williams.dev@gmail.com',
        external: false,
    },
    {
        label: 'GitHub',
        value: 'josiah-williams2024',
        href: 'https://github.com/josiah-williams2024',
        external: true,
    },
    {
        label: 'LinkedIn',
        value: 'josiah-williams-developer',
        href: 'https://www.linkedin.com/in/josiah-williams-developer',
        external: true,
    },
];

export default function Contact() {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <p className="eyebrow">Let’s connect</p>
                <h1>Get in touch.</h1>
                <p className="intro">
                    I’m always interested in thoughtful software, opportunities to
                    learn, and conversations with other developers.
                </p>
            </header>

            <div className="contact-grid">
                {contactLinks.map((link) => (
                    <a
                        className="contact-card"
                        href={link.href}
                        key={link.label}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noreferrer' : undefined}
                    >
                        <span className="contact-label">{link.label}</span>
                        <span className="contact-value">{link.value}</span>
                        <span aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
