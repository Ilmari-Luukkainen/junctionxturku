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
  '/about': 'about'
}

// Apufunktio, joka päättelee nykyisen sivun hashin perusteella
const resolvePath = () => {
  // Haetaan hash (esim. "#/challenges") ja poistetaan ensimmäinen "#"
  // Jos hashia ei ole, oletus on "/"
  const currentHash = window.location.hash.replace('#', '') || '/';
  
  // Jos hash sisältää ankkurin (esim. #/homepage#faq), otetaan vain reittiosa
  const pathPart = currentHash.split('#')[0];
  
  return routes[pathPart] ?? 'homepage';
};

function App() {
  // Alustetaan tila suoraan osoiterivin hashista
  const [activeSection, setActiveSection] = useState(() => resolvePath())
  const [showTop, setShowTop] = useState(false);

  const renderView = () => {
    setActiveSection(resolvePath())
  }

  const navigateTo = (path) => {
    // Navigointi tapahtuu muuttamalla hashia, jolloin GitHub Pages pysyy index.html-sivulla
    window.location.hash = path;
  }

  useEffect(() => {
    const onHashChange = () => {
      renderView()
    }

    // Kuunnellaan hashin muuttumista (toimii back-nappulalla ja navigateTo-funktiolla)
    window.addEventListener('hashchange', onHashChange)
    
    // Varmistetaan oikea näkymä ladattaessa
    renderView()

    return () => {
      window.removeEventListener('hashchange', onHashChange)
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

  // Scrollaus-logiikka haasteiden ankkureille
  useEffect(() => {
    if (activeSection === 'challenges' && window.location.hash.includes('#', 2)) {
      setTimeout(() => {
        const parts = window.location.hash.split('#');
        const id = parts[parts.length - 1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }
  }, [activeSection]); 

  // Skrollaa ylös sivun vaihdossa, jos ei ole ankkuria
  useEffect(() => {
    // Jos hashissa on vain yksi '#' (eli reitti), skrollaa ylös
    const hashCount = (window.location.hash.match(/#/g) || []).length;
    if (hashCount <= 1) {
      window.scrollTo(0, 0);
    }
  }, [activeSection]); 

  // FAQ skrollaus etusivulla
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
      <main className="view-container">
        {activeSection === 'homepage' && (
          <section id="homepage">
            <Background />
            <Landingpage />
            <div className="blur-overlay"></div>
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


        {activeSection === 'about' && (
          <section id="about">
            <About />
          </section>
        )}
      </main>

      {/* Back to top button */}
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