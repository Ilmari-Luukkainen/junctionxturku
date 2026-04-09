import React from 'react';
import "./Partners.css";

const PARTNERS = [
  { name: "Junction", logo: "./JUNCTIONx_logos-wordmark-white.svg" },
  { name: "AAES", logo: "./aaes.webp" },
  { name: "Junction", logo: "./JUNCTIONx_logos-wordmark-white.svg" },
  { name: "AAES", logo: "./aaes.webp" },
  { name: "Junction", logo: "./JUNCTIONx_logos-wordmark-white.svg" },
  { name: "AAES", logo: "./aaes.webp" },
  { name: "Junction", logo: "./JUNCTIONx_logos-wordmark-white.svg" },
  { name: "AAES", logo: "./aaes.webp" },
];

// Duplikoidaan lista kerran saumatonta animaatiota varten
const PARTNERS_DUPLICATED = [...PARTNERS, ...PARTNERS];

const Partners = () => {
  return (
    <section className="partners" aria-labelledby="our-partners">
      <h5 id="our-partners">Our Partners:</h5>
      <div className="carousel" role="region" aria-label="Partner carousel">
        <div className="partners-grid">
          {PARTNERS_DUPLICATED.map((partner, idx) => (
            <div className="partner-card" key={`${partner.name}-${idx}`}>
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                style={{ height: '40px' }}
                loading="lazy"
                decoding="async"
                width="160" /* Auttaa CLS-pisteissä varaamalla tilan */
                height="40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;