
import './App.css'

function App() {
  return (
      <div className="workspace">
        <aside className="sidebar">
          <a className="brand" href="/">
            JW<span>.</span>/
          </a>

          <p className="sidebar-label">Workspace</p>

          <nav aria-label="Main navigation">
            <button type="button">Overview</button>
            <button type="button">Projects</button>
            <button type="button">Experience</button>
            <button type="button">About</button>
            <button type="button">Contact</button>
          </nav>
        </aside>

        <div className="workspace-body">
          <header className="tab-bar">
            <span className="active-tab">overview.tsx</span>
          </header>

          <main className="main-content">
            <p className="eyebrow"> Hello, I'm Josiah</p>

            <h1>
              Thoughtful Code.
              <br />
              Useful experiences.
            </h1>

            <p className="intro">
              I'm a software developer building applications with React, Vue and Laravel.
            </p>
          </main>

          <footer className="status-bar">
            <span>● Available to connect</span>
            <span>Currently building SpendTempo</span>
          </footer>

        </div>
      </div>
  )
}

export default App
