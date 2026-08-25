import React from 'react';
import './ChallengeBlocks.css';

const challenges = [
  { 
    id: 1, 
    title: 'UNLOCKING SOON', 
    description: 'We are currently finalizing the first set of technical challenges. Prepare your stack and stay tuned – the first block drops shortly.', 
    path: '/challenges#unlocking-soon' 
  },
  { 
    id: 2, 
    // Määritetään kuva otsikon tilalle:
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
            {/* OTSIKKO-ALUE: Näytetään kuva, jos titleImage löytyy, muuten tekstititle */}
            <div className="card-header-area">
              {item.titleImage ? (
                <img 
                  src={item.titleImage} 
                  alt={item.alt || 'Challenge logo'} 
                  className="title-image"
                  style={{ maxHeight: '120px', width: 'auto', display: 'block' }} 
                />
              ) : (
                <h4 className="post-title">{item.title}</h4>
              )}
            </div>
            
            {/* KUVAUS-ALUE: Teksti pysyy kaikissa ennallaan */}
            <div className="card-body-area">
              <p className="post-description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ChallengeBlocks;