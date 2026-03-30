import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Landingpage from './Landingpage'
import Partners from './components/Partners'
import InfoCards from './components/InfoCards'
import Footer from './Footer'
import Background from './Background.jsx'
import FAQ from './Faq'
import Video from './Video.jsx'
import ChallengeBlocks from './ChallengeBlocks.jsx'



const routes = {
  '/': 'homepage',
  '/challenges': 'challenges',
  '/edit': 'edit',
}

const resolvePath = (path) => routes[path] ?? 'homepage'

function App() {
  const [activeSection, setActiveSection] = useState(() => resolvePath(location.pathname))
  const [showTop, setShowTop] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 120);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header onNavigate={navigateTo} />
      <main className="view-container">
        {activeSection === 'homepage' && (
          <section id="homepage">
            <Background />
            <Landingpage />
            <div class="blur-overlay"></div>
            <Video /> 
            <ChallengeBlocks />
            <Partners />
            <InfoCards />
            <FAQ />
          </section>
        )}

        {activeSection === 'challenges' && (
          <section id="challenges">
            <h2>Haasteet</h2>
            <p>Täällä näkyy haasteet.</p>
          </section>
        )}

        {activeSection === 'edit' && (
          <section id="edit">
            <h2>Muokkaa</h2>
            <p>Täällä näkyy muokkausmahdollisuus.</p>
          </section>
        )}
        </main>

        {/* Back to top button (mobile only) */}
        {typeof window !== 'undefined' && (
          <button
            className={`back-to-top ${showTop ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <span className="back-to-top-label">TOP</span>
            <span className="back-to-top-arrow">▲</span>
          </button>
        )}

        <Footer />
       
    </>
    
    )
}

export default App
