import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="info-container">
      <div className="bg-glow bottom-glow" aria-hidden="true"></div>
      <div className="info-content">
        <header className="info-header">
          <div className="accent-line"></div>
          {/* Vaihdettu h2:ksi, koska Landingpage on jo h1. 
              Lisätty JunctionX Turku kontekstia. */}
          <h1>MEET THE TEAM</h1>
          <a href="mailto:info@junctionxturku.com" className="info-link">
            <p className="info-subtitle">info@junctionxturku.com</p>
          </a> 
        </header>

        <div className="team-grid"> {/* Suositus: käytä grid-luokkaa CSS:ssä */}
          
          <div className="team-box">
            <h3 className="role-title">Executive Director</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Rafael Raoult - Executive Director of JunctionX Turku" /> 
            </div>
            <h3 className="member-name">Rafael Raoult</h3>
          </div>
  
          <div className="team-box">
            <h3 className="role-title">Head of Finance</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Kristian Kuismin - Head of Finance" /> 
            </div>
            <h3 className="member-name">Kristian Kuismin</h3>
          </div>

          <div className="team-box">
            <h3 className="role-title">Head of Operations</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Akseli Hakanen - Head of Operations" /> 
            </div>
            <h3 className="member-name">Akseli Hakanen</h3>
          </div>

          <div className="team-box">
            <h3 className="role-title">Head of Partnerships</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Tomi Räsänen - Head of Partnerships" /> 
            </div>
            <h3 className="member-name">Tomi Räsänen</h3>
          </div>
  
          <div className="team-box">
            <h3 className="role-title">Head of Partnerships</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Eino Vuopala - Head of Partnerships" /> 
            </div>
            <h3 className="member-name">Eino Vuopala</h3>
          </div>

          <div className="team-box">
            <h3 className="role-title">Head of Communications</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Siiri Lehtiniemi - Head of Communications" /> 
            </div>
            <h3 className="member-name">Siiri Lehtiniemi</h3>
          </div>

          <div className="team-box">
            <h3 className="role-title">CMO</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Sonja Venäläinen - CMO" /> 
            </div>
            <h3 className="member-name">Sonja Venäläinen</h3>
          </div>

          <div className="team-box">
            <h3 className="role-title">CTO</h3>
            <div className="team-image">
              <img src="./questionmark.webp" alt="Ilmari Luukkainen - CTO" /> 
            </div>
            <h3 className="member-name">Ilmari Luukkainen</h3>
          </div>
      
        </div>
      </div>
    </section>
  );
}

export default About;