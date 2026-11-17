import {useState} from "react";
import './App.css';
import type {Page} from "./types/Page.ts";
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';



function App() {
  const [activePage, setActivePage] = useState<Page>("overview");
  return (
      <div className="workspace">
        <Sidebar
            activePage={activePage}
            onPageChange={setActivePage}
        />
        <div className="workspace-body">
          <header className="tab-bar">
            <span className="active-tab">{activePage}.tsx</span>
          </header>

          <main className="main-content">
            {activePage === 'overview' && (
                <>
                  <p className="eyebrow">Hello, I’m Josiah</p>

                  <h1>
                    Thoughtful code.
                    <br />
                    Useful experiences.
                  </h1>

                  <p className="intro">
                    I’m a software developer building applications with
                    React, Vue, and Laravel.
                  </p>
                </>
            )}

            {activePage === 'projects' && <Projects />}

            {activePage === 'experience' && (
                <>
                  <p className="eyebrow">Learning through building</p>
                  <h1>My experience.</h1>
                  <p className="intro">
                    My work and growth as a Software Developer Co-op at Vehikl.
                  </p>
                </>
            )}

            {activePage === 'about' && (
                <>
                  <p className="eyebrow">Behind the code</p>
                  <h1>A little about me.</h1>
                  <p className="intro">
                    I enjoy solving problems, learning new tools, and turning
                    ideas into useful applications.
                  </p>
                </>
            )}

            {activePage === 'contact' && (
                <>
                  <p className="eyebrow">Let’s connect</p>
                  <h1>Get in touch.</h1>
                  <p className="intro">
                    Find me on GitHub and LinkedIn, or send me an email.
                  </p>
                </>
            )}
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