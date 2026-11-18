import './App.css';
import Projects from './pages/Projects';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import Sidebar from './components/Sidebar.tsx';
import { projects } from './data/projects.ts';
import Overview from './pages/Overview.tsx';
import Experience from './pages/Experience.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

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
          <span>● Available to connect</span>
          <span>Currently building SpendTempo</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
