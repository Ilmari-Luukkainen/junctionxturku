import React from 'react';
import './ChallengeBlocks.css';

const challenges = [
  {
    id: 1,
    title: 'UNLOCKING SOON',
    description: 'We are currently finalizing the first set of technical challenges. Prepare your stack and stay tuned – the first block drops shortly.',
  },
  {
    id: 2,
    title: 'INNOVATION TRACK',
    description: 'Focus on real-world impact. We\'re bringing together the brightest minds to solve complex problems with cutting-edge tech.',
  },
  {
    id: 3,
    title: 'MYSTERY CHALLENGE',
    description: 'A deep dive into AI and automation awaits. This track will test your ability to build scalable solutions under pressure.',
  }
];

const ChallengeBlocks = () => {
  return (
    <section className="challenge-section">
      <div className="challenge-header">
        <h1>Challenges</h1>
      </div>
      <div className="challenge-grid">
        {challenges.map((item) => (
          <div key={item.id} className="challenge-card">
            <h4 className="post-title">{item.title}</h4>
            <p className="post-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeBlocks;