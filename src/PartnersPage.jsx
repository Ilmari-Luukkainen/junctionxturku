import React from 'react';
import './Partnerspage.css';

const PartnersPage = () => {
  return (
    <div className="partners-page">
      {/* 1. HERO SECTION */}
      <section className="partners-hero">
        <div className="accent-text">// PARTNER WITH JUNCTIONX TURKU</div>
        <h1 className="hero-title">
          Join the world's leading <br />
          hackathon community
        </h1>
        <p className="hero-subtitle">
          Connect with top tech talent, showcase your <br />
          brand, and drive innovation alongside <br />
          industry leaders.
        </p>
      </section>

      {/* 2. WHY PARTNER SECTION */}
      <section className="partners-why">
        <div className="accent-text">// WHY PARTNER WITH US</div>
        <div className="value-grid">
          <div className="value-card highlight-card">
            <div className="value-icon">
              {/* Harmaa versio */}
              <img src="/people-svgrepo-com.svg" alt="" className="partner-icon-img icon-base" />
              {/* Pinkki versio (tallenna se tällä nimellä tai vaihda polku) */}
              <img src="/people-svgrepo-com-pink.svg" alt="People" className="partner-icon-img icon-hover" />            
            </div>
            <h3>Top Talent</h3>
            <p>Access developers, designers, and innovators from the world's best universities.</p>
          </div>

          <div className="value-card highlight-card">
            <div className="value-icon">
              <img src="/flash-1007-svgrepo-com.svg" alt="" className="partner-icon-img icon-base" />
              <img src="/flash-1007-svgrepo-com-pink.svg" alt="Flash" className="partner-icon-img icon-hover" />            
            </div>
            <h3>Innovation</h3>
            <p>Set real challenges and get fresh solutions built with your technology in just 48 hours.</p>
          </div>

          <div className="value-card highlight-card">
            <div className="value-icon">
              <img src="/handshake-svgrepo-com.svg" alt="" className="partner-icon-img icon-base" />
              <img src="/handshake-svgrepo-com-pink.svg" alt="Handshake" className="partner-icon-img icon-hover" />            
            </div>
            <h3>Brand Exposure</h3>
            <p>Position your brand in front of the next generation of tech leaders and decision-makers.</p>
          </div>
        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="partners-contact">
        <h2 className="contact-main-title">LIMITED SEATS AVAILABLE!</h2>
        <p className="contact-description">
          Whether you want to set a challenge track, provide APIs, sponsor prizes, 
          or simply get your brand in front of top talent — we'd love to chat.
        </p>

        <div className="accent-text">// YOUR PARTNERSHIP CONTACTS</div>
        
        <div className="contact-grid">
          <div className="contact-person">
            <div className="person-header">
              <img src="./questionmark.webp" alt="Eino Vuopala" className="person-img" />
              <div className="person-info">
                <span className="person-role">PARTNERSHIPS</span>
                <h3>Eino Vuopala</h3>
              </div>
            </div>
            <div className="person-links">
              <a href="mailto:eino@hackjunction.com">eino@hackjunction.com <span>→</span></a>
              <a href="https://www.linkedin.com/in/eino-vuopala-2bb452345/" target="_blank" rel="noreferrer">LinkedIn <span>→</span></a>
            </div>
          </div>

          <div className="contact-person">
            <div className="person-header">
              <img src="./questionmark.webp" alt="Tomi Räsänen" className="person-img" />
              <div className="person-info">
                <span className="person-role">PARTNERSHIPS</span>
                <h3>Tomi Räsänen</h3>
              </div>
            </div>
            <div className="person-links">
              <a href="mailto:tomi.rasanen@hackjunction.com">tomi.rasanen@hackjunction.com <span>→</span></a>
              <a href="https://www.linkedin.com/in/tomi-räsänen-41b70b282/" target="_blank" rel="noreferrer">LinkedIn <span>→</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;