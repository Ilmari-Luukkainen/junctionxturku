import React from 'react';
import './ChallengeBlocks.css';

const challenges = [
  { 
    id: 1, 
    titleImages: [
      { src: '/redstone.webp', alt: 'Redstone Logo' },
      { src: '/Apelago.png', alt: 'Apelago Logo' }
    ],
    description: 'APelago is the Baltic Sea region\'s leading blue economy ecosystem, connecting startups, investors, researchers and corporates across the Baltic Sea Region and beyond to build resilient blue economy businesses and restore the health of our seas.\n\nRedstone is a venture capital firm investing across FinTech, Energy & Infrastructure, Health, Industrial, DeepTech, and Blue Economy, backing ambitious founders building category-leading companies. This October, they\'re bringing that same eye for bold ideas to the hackathon floor in Turku', 
    path: '/challenges#unlocking-soon' 
  },
  { 
    id: 2, 
    titleImage: '/If.svg', 
    alt: 'If Insurance',
    description: 'If is the largest insurance company in the Nordics, helping around 4.6 million customers protect what matters most, from homes and cars to businesses and large enterprises. Powering their insurance work is a large technology organisation, the If Tech Community, spanning the Nordics and Baltics, and now our participants get the chance to tackle a real challenge from them during the hackathon.',
    path: '/challenges#if'
  },
  { 
    id: 3, 
    title: 'MYSTERY CHALLENGE', 
    description: 'A deep dive into AI and automation awaits. This track will test your ability to build scalable solutions under pressure.', 
    path: '/challenges#mystery-challenge' 
  }
];

const ChallengeBlocks = ({ onNavigate }) => {
  return (
    <section className="challenge-section" aria-labelledby="challenge-main-title">
      <div className="challenge-header">
        <h2 id="challenge-main-title">Challenges</h2>
      </div>
      <div className="challenge-grid" role="list">
        {challenges.map((item) => (
          <article 
            key={item.id} 
            className="challenge-card" 
            onClick={() => onNavigate(item.path)}
            role="listitem"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.path)}
          >
            {/* Poistettu kiinteä height ja lisätty pieni marginBottom tekstiä kohden */}
            <div className="card-header-area" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              {item.titleImages ? (
                <div className="title-images-wrapper" style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  {item.titleImages.map((img, index) => (
                    <img 
                      key={index}
                      src={img.src} 
                      alt={img.alt || 'Challenge logo'} 
                      className="title-image"
                      style={{ maxHeight: '75px', maxWidth: '45%', width: 'auto', objectFit: 'contain' }} 
                    />
                  ))}
                </div>
              ) : item.titleImage ? (
                <img 
                  src={item.titleImage} 
                  alt={item.alt || 'Challenge logo'} 
                  className="title-image"
                  /* Koko on erittäin suuri (maxHeight: 220px), eikä ylimääräisiä margin-top puskureita ole */
                  style={{ maxHeight: '220px', maxWidth: '100%', width: 'auto', objectFit: 'contain' }} 
                />
              ) : (
                <h4 className="post-title">{item.title}</h4>
              )}
            </div>
            
            <div className="card-body-area">
              <p className="post-description" style={{ whiteSpace: 'pre-line' }}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ChallengeBlocks;