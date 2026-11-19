import { useEffect, useRef } from 'react';
import './App.css';
import Projects from './pages/Projects';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Sidebar from './components/Sidebar.tsx';
import { projects } from './data/projects.ts';
import Overview from './pages/Overview.tsx';
import Experience from './pages/Experience.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

type RouteDetails = {
  tabName: string;
  title: string;
  description: string;
};

const pageDetails: Record<string, RouteDetails> = {
  '/': {
    tabName: 'overview',
    title: 'Josiah Williams | Software Developer',
    description:
      'Josiah Williams is a software developer building thoughtful applications with React, Vue, Laravel, and TypeScript.',
  },
  '/projects': {
    tabName: 'projects',
    title: 'Projects | Josiah Williams',
    description:
      'Explore CodeSmellTrainer, SpendTempo, and the Developer Workspace portfolio.',
  },
  '/experience': {
    tabName: 'experience',
    title: 'Experience | Josiah Williams',
    description:
      'Software development experience with Laravel, Vue, PostgreSQL, testing, and collaborative delivery.',
  },
  '/about': {
    tabName: 'about',
    title: 'About | Josiah Williams',
    description:
      'Learn about my background, development interests, and approach to building software.',
  },
  '/contact': {
    tabName: 'contact',
    title: 'Contact | Josiah Williams',
    description:
      'Connect with Josiah Williams by email, GitHub, or LinkedIn.',
  },
};

function getRouteDetails(pathname: string): RouteDetails {
  const page = pageDetails[pathname];

  if (page) {
    return page;
  }

  const projectId = pathname.match(/^\/projects\/([^/]+)$/)?.[1];
  const project = projects.find((item) => item.id === projectId);

  if (project) {
    return {
      tabName: project.name,
      title: `${project.name} | Josiah Williams`,
      description: project.description,
    };
  }

  return pageDetails['/'];
}

function App() {
  const location = useLocation();
  const routeDetails = getRouteDetails(location.pathname);
  const tabName = routeDetails.tabName;
  const mainContentRef = useRef<HTMLElement>(null);
  const isInitialRoute = useRef(true);

  useEffect(() => {
    if (isInitialRoute.current) {
      isInitialRoute.current = false;
      return;
    }

    mainContentRef.current?.focus();
  }, [location.pathname]);

  useEffect(() => {
    document.title = routeDetails.title;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    description?.setAttribute('content', routeDetails.description);
  }, [routeDetails.title, routeDetails.description]);

  return (
    <div className="workspace">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Sidebar />

      <div className="workspace-body">
        <header className="tab-bar">
          <span className="active-tab">{tabName}.tsx</span>
        </header>

        <main
          className="main-content"
          id="main-content"
          ref={mainContentRef}
          tabIndex={-1}
        >
          <Routes>
            <Route path="/" element={<Overview />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Projects />} />

            <Route path="/experience" element={<Experience />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="status-bar">
          <span className="availability-status">
            <span aria-hidden="true">●</span>
            Open to connecting
          </span>
          <span>Currently building SpendTempo</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
