import React from 'react'
import LineWaves from './LineWavesTEMP.jsx'

export default function Background() {
  return (
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
  )
}
