import './App.css';
import Projects from './pages/Projects';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Sidebar from './components/Sidebar.tsx';
import { projects } from './data/projects.ts';

const pageTabNames: Record<string, string> = {
  '/': 'overview',
  '/projects': 'projects',
  '/experience': 'experience',
  '/about': 'about',
  '/contact': 'contact',
};

function getTabName(pathname: string) {
  const pageName = pageTabNames[pathname];

  if (pageName) {
    return pageName;
  }

  const projectId = pathname.match(/^\/projects\/([^/]+)$/)?.[1];
  const project = projects.find((item) => item.id === projectId);

  return project?.name ?? 'overview';
}

function App() {
  const location = useLocation();
  const tabName = getTabName(location.pathname);

  return (
    <div className="workspace">
      <Sidebar />

      <div className="workspace-body">
        <header className="tab-bar">
          <span className="active-tab">{tabName}.tsx</span>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Projects />} />

            <Route
              path="/experience"
              element={
                <>
                  <p className="eyebrow">Learning through building</p>
                  <h1>My experience.</h1>
                  <p className="intro">
                    My work and growth as a Software Developer Co-op at Vehikl.
                  </p>
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <p className="eyebrow">Behind the code</p>
                  <h1>A little about me.</h1>
                  <p className="intro">
                    I enjoy solving problems, learning new tools, and turning
                    ideas into useful applications.
                  </p>
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <p className="eyebrow">Let’s connect</p>
                  <h1>Get in touch.</h1>
                  <p className="intro">
                    Find me on GitHub and LinkedIn, or send me an email.
                  </p>
                </>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="status-bar">
          <span>● Available to connect</span>
          <span>Currently building SpendTempo</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
