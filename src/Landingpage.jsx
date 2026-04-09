import React from 'react'
import DecryptedText from './Decryptedtext.jsx'
import BorderGlow from './Borderglow.jsx'     

export default function Landingpage() {
  return (
    <section className="landing-container">
      <div className="content-wrapper">
        <h1 className="landing-header">
          {/* SEO-optimoitu piilotettu teksti: Google näkee tämän heti, 
              mutta se ei näy ruudulla eikä sotke animaatiota. */}
          <span style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: '0'
          }}>
            JunctionX Turku 2026 - 
          </span>

          <div className="decrypted-text">
            <DecryptedText
              text="Hack the Future!"
              animateOn='view'
              revealDirection="start"
              sequential
              useOriginalCharsOnly
            />
          </div>
        </h1>

        <BorderGlow
          edgeSensitivity={30}
          glowColor="320 100 70"
          backgroundColor="#060010"
          borderRadius={28}
          glowRadius={100}
          glowIntensity={3}
          coneSpread={25}
          animated={true}
          colors={['#df1bae', '#2aef61', '#2aef61']}
        >
           {/*<div style={{ padding: '0px' }}>
            <button className="register-button">Register</button>
          </div>*/}
        </BorderGlow>
      </div>

      <div className="bottom-bar">
          <div className="bar-texts">
              <time className="bar-text-left" dateTime="2026-10-16">16-18 October</time>
              <div className="bar-line" role="presentation"></div>
              <p className="bar-text-right">Turku, Finland</p>
          </div>
      </div>
    </section>
  )
}