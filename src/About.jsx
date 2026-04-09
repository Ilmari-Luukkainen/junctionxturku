import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="info-container">
      <div className="bg-glow top-glow"></div>
      <div className="bg-glow bottom-glow"></div>

      <div className="info-content">
        <header className="info-header">
          <div className="accent-line"></div>
          <h1>MEET THE TEAM </h1>
          <p className="info-subtitle">contact@junctionxturku.com</p>
        </header>


        
        <div className="team-box">
            <h2>Executive Director</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Rafael Raoult</h2></p>
        </div>
  
        <div className="team-box">
            <h2>Head of Finance</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Kristian Kuismin</h2></p>
        </div>

        <div className="team-box">
            <h2>Head of Operations</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Akseli Hakanen</h2></p>
        </div>

        <div className="team-box">
            <h2>Head of Partnerships</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Tomi Räsänen</h2></p>
        </div>
  
        <div className="team-box">
            <h2>Head of Partnerships</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Eino Vuopala</h2></p>
        </div>

        <div className="team-box">
            <h2>Head of Communications</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Siiri Lehtiniemi</h2></p>
        </div>

                <div className="team-box">
            <h2>CMO</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Sonja Venäläinen</h2></p>
        </div>

        <div className="team-box">
            <h2>CTO</h2>
        <div className="team-image">
            <img src="./questionmark.png"/> 
        </div>
            <p><h2>Ilmari Luukkainen</h2></p>
        </div>
      
    </div>
    </div>
  );
}

export default About;