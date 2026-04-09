import React from 'react';
import "./InfoCards.css"

const InfoCards = () => {
  return (
    <section className="stats-container" aria-label="JunctionX Turku Event Statistics">
      <div className="stat-card-row">
        <div className="stat-card" id="card-a1">
          {/* Vaihdettu diviksi ja lisätty selkeä luokka. 
              SEO: otsikkohierarkia säilyy puhtaana. */}
          <div className="stat-value">To be announced</div>
          <span className="stat-label">Total Prize Pool</span>         
        </div>
      
        <div className="stat-card" id="card-b1">
          <div className="stat-value">#1</div>
          <span className="stat-label">Hackathon in Turku</span>
        </div>
      </div>

      <div className="stat-card-row">
        <div className="stat-card" id="card-a2">
          <div className="stat-value">+300</div>
          <span className="stat-label">participants expected</span>
        </div>

        <div className="stat-card" id="card-b2">
          <div className="stat-value">Weekend</div>
          <span className="stat-label">of intensive doing</span>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;