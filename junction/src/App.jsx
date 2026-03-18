import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LetterGlitch from './LetterGlitch.jsx';
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <LetterGlitch
  glitchSpeed={10}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
      
          )
}

export default App
