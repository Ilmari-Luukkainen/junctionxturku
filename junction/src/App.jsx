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



const routes = {
  '/': 'homepage',
  '/challenges': 'challenges',
  '/edit': 'edit',
}

const resolvePath = (path) => routes[path] ?? 'homepage'

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
        {activeSection === 'homepage' && (
          <section id="homepage">
            <Background />
            <Landingpage />
            <div class="blur-overlay"></div>
            <Video />
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

        <Footer />
       
    </>
    
    )
}

export default App
