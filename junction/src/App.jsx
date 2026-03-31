import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Landingpage from './Landingpage.jsx'
import Partners from './components/Partners'
import InfoCards from './components/InfoCards'
import Footer from './Footer.jsx'
import Background from './Background.jsx'
import FAQ from './Faq.jsx'
import Video from './Video.jsx'
import ChallengeBlocks from './ChallengeBlocks.jsx'
import ChallengesPage from './ChallengePage.jsx'
import About from './About.jsx'


const routes = {
  '/': 'homepage',
  '/challenges': 'challenges',
  '/edit': 'edit',
  '/about': 'about'
}

const resolvePath = (path) => {
  const cleanPath = path.split('#')[0]; 
  return routes[cleanPath] ?? 'homepage';
};
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

  useEffect(() => {
  if (activeSection === 'challenges' && window.location.hash) {
    setTimeout(() => {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  }
}, [activeSection]); 

useEffect(() => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
}, [activeSection]); 

useEffect(() => {
  if (activeSection === 'homepage' && window.location.hash === '#faq') {
    setTimeout(() => {
      const el = document.getElementById('faq');
      if (el) {
        const headerHeight = 0;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300); 
  }
}, [activeSection]);


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
            <ChallengeBlocks onNavigate={navigateTo}/>
            <Partners />
            <InfoCards />
            <FAQ />
          </section>
        )}

        {activeSection === 'challenges' && (
          <section id="challenges">
            <ChallengesPage />
          </section>
        )}

        {activeSection === 'edit' && (
          <section id="edit">
            <h2>Muokkaa</h2>
            <p>Täällä näkyy muokkausmahdollisuus.</p>
          </section>
        )}

        {activeSection === 'about' && (
          <section id="about">
            <About />
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
