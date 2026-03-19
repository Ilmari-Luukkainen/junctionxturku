import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'

const routes = {
  '/': 'hero',
  '/about': 'about',
  '/schedule': 'schedule',
}

const resolvePath = (path) => routes[path] ?? 'hero'

function App() {
  const [activeSection, setActiveSection] = useState(() => resolvePath(location.pathname))

  const renderView = (path) => {
    setActiveSection(resolvePath(path))
  }

  const navigateTo = (path) => {
    history.pushState(null, '', path)
    renderView(path)
  }

  useEffect(() => {
    const onPopState = () => {
      renderView(location.pathname)
    }

    window.addEventListener('popstate', onPopState)
    renderView(location.pathname)

    return () => {
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return (
    <>
      <Header onNavigate={navigateTo} />
      <main className="view-container">
        {activeSection === 'hero' && (
          <section id="hero">
            <h2>Etusivu</h2>
            <p>Tervetuloa Junction-sivulle.</p>
          </section>
        )}

        {activeSection === 'about' && (
          <section id="about">
            <h2>About</h2>
            <p>Tämä on SPA-esimerkki, jossa URL vaihtuu ilman uudelleenlatausta.</p>
          </section>
        )}

        {activeSection === 'schedule' && (
          <section id="schedule">
            <h2>Aikataulu</h2>
            <p>Täällä näkyy tapahtuman aikataulu.</p>
          </section>
        )}
      </main>
    </>
    )
}

export default App
