import React from 'react'
import LineWaves from './LineWaves'

export default function Landingpage() {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        <h3 className="single-line-center">
          Hack the future
        </h3>
        {/* registernappi */}
      </div>

      {/*alapalkki*/}
      <div className="bottom-bar">
        <span className="bottom-left">9-11 October 2026</span>
        <span className="bottom-right">Turku, Finland</span>
      </div>

      <LineWaves
        speed={0.2}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={0.2}
        color1="#df1bae"
        color2="#ffffff"
        color3="#ffffff"
        enableMouseInteraction={false}
        mouseInfluence={2}
      />
    </div>
  )
}