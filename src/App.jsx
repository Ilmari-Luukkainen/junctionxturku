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
import PartnersPage from './PartnersPage.jsx'

const routes = {
  '/': 'homepage',
  '/challenges': 'challenges',
  '/about': 'about',
  '/partners': 'partners'
}

// SEO-otsikot eri sivuille
const pageTitles = {
  homepage: 'JunctionX Turku 2026 | The Ultimate Tech Hackathon',
  challenges: 'Challenges | JunctionX Turku 2026',
  about: 'About Us | JunctionX Turku 2026',
  partners: 'Our Partners | JunctionX Turku 2026'
}

const resolvePath = () => {
  const currentHash = window.location.hash.replace('#', '') || '/';
  const pathPart = currentHash.split('#')[0];
  return routes[pathPart] ?? 'homepage';
};

function App() {
  const [activeSection, setActiveSection] = useState(() => resolvePath())
  const [showTop, setShowTop] = useState(false);

  const renderView = () => {
    setActiveSection(resolvePath())
  }

  const navigateTo = (path) => {
    window.location.hash = path;
  }

  // SEO: Päivitetään sivun otsikko aina kun näkymä vaihtuu
  useEffect(() => {
    document.title = pageTitles[activeSection] || 'JunctionX Turku';
  }, [activeSection]);

  useEffect(() => {
    const onHashChange = () => renderView()
    window.addEventListener('hashchange', onHashChange)
    renderView()
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (activeSection === 'challenges' && window.location.hash.includes('#', 2)) {
      setTimeout(() => {
        const parts = window.location.hash.split('#');
        const id = parts[parts.length - 1];
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    }
  }, [activeSection]); 

  useEffect(() => {
    const hashCount = (window.location.hash.match(/#/g) || []).length;
    if (hashCount <= 1) window.scrollTo(0, 0);
  }, [activeSection]); 

  useEffect(() => {
    if (activeSection === 'homepage' && window.location.hash.endsWith('#faq')) {
      setTimeout(() => {
        const el = document.getElementById('faq');
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 300); 
    }
  }, [activeSection]);

  return (
    <>
      <Header onNavigate={navigateTo} />
      
      {/* Käytetään main-elementtiä hakukoneita varten */}
      <main className="view-container" id="main-content">
        
        {activeSection === 'homepage' && (
          <article id="homepage">
            <Background />
            <Landingpage />
            <div className="blur-overlay"></div>
            <Video /> 
            <ChallengeBlocks onNavigate={navigateTo}/>
            <Partners />  
            <InfoCards />
            <FAQ />
          </article>
        )}

        {activeSection === 'challenges' && (
          <article id="challenges">
            <ChallengesPage />
          </article>
        )}

        {activeSection === 'about' && (
          <article id="about">
            <About />
          </article>
        )}

        {activeSection === 'partners' && (
          <article id="partners">
            <PartnersPage />
          </article>
        )}
        
      </main>

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