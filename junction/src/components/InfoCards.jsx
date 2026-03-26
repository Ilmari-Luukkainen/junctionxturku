import React from 'react';

const InfoCards = () => {
  return (
    <div className="stats-container" >
      <div className="stat-card-row" id='statrow_1' >
        <div className="stat-card" id="card-a1">
          <h2 className="stat-value">To be announced</h2>
          <span className="stat-label">Total Prize Pool</span>         
        </div>
      
        <div className="stat-card"id="card-b1">
          <h2 className="stat-value">#1</h2>
          <span className="stat-label">Hackathon in Turku</span>
        </div>
      </div>

      <div className="stat-card-row" id='statrow_1' >
        <div className="stat-card"id="card-a2">
          <h2 className="stat-value">+300</h2>
          <span className="stat-label">participants expected</span>
        </div>

        <div className="stat-card" id="card-b2">
          <h2 className="stat-value">Weekend</h2>
          <span className="stat-label">of Intensitive doing</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;