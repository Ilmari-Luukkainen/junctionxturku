import React from 'react'
import DecryptedText from './Decryptedtext.jsx'
import BorderGlow from './Borderglow'     

export default function Landingpage() {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <h67 className="landing-header">
          <div className="decrypted-text">
            <DecryptedText
              text="Hack the Future!"
              animateOn='view'
              revealDirection="start"
              sequential
              useOriginalCharsOnly
            />
          </div>
        </h67>
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
          <div style={{ padding: '0px' }}>
            <button className="register-button">Register</button>
          </div>
          </BorderGlow>
      </div>
      <div className="bottom-bar">
          <div className="bar-texts">
              <p className="bar-text-left"> 16-18 October</p>
              <div className="bar-line"></div>
              <p className="bar-text-right"> Turku, Finland</p>
          </div>
      </div>
    </div>
  )
}
