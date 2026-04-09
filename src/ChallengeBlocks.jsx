import React from 'react';
import './ChallengeBlocks.css';

const challenges = [
  { id: 1, title: 'UNLOCKING SOON', description: 'We are currently finalizing the first set of technical challenges. Prepare your stack and stay tuned – the first block drops shortly.', path: '/challenges#unlocking-soon' },
  { id: 2, title: 'INNOVATION TRACK', description: 'Focus on real-world impact. We\'re bringing together the brightest minds to solve complex problems with cutting-edge tech.', path: '/challenges#innovation-track' },
  { id: 3, title: 'MYSTERY CHALLENGE', description: 'A deep dive into AI and automation awaits. This track will test your ability to build scalable solutions under pressure.', path: '/challenges#mystery-challenge' }
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
            onKeyPress={(e) => e.key === 'Enter' && onNavigate(item.path)}
          >
            {/* TÄRKEÄ MUUTOS: Kääritään otsikko omaan diviin */}
            <div className="card-header-area">
              <h4 className="post-title">{item.title}</h4>
            </div>
            
            {/* TÄRKEÄ MUUTOS: Kääritään kuvaus omaan diviin */}
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