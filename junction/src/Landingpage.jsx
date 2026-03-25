import React from 'react'
import DecryptedText from './Decryptedtext'

export default function Landingpage() {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <h1 className="single-line-center">
          <div style={{ marginTop: '4rem' }}>
            <DecryptedText
              text="Hack the Future"
              animateOn='view'
              revealDirection="start"
              sequential
              useOriginalCharsOnly
            />
          </div>
        </h1>
        {/* registernappi */}
      </div>

      {/*alapalkki*/}
      <div className="bottom-bar">
          <div className="bar-texts">
              <p className="bar-text-left"> 9-11 October</p>
              <p className="bar-text-right"> Turku, Finland</p>
          </div>
      </div>
    </div>
  )
}