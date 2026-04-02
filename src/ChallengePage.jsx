import React from 'react';
import './ChallengePage.css';

const ChallengePage = () => {
  return (
    <div className="info-container">
      <div className="bg-glow top-glow"></div>
      <div className="bg-glow bottom-glow"></div>

      <div className="info-content">
        <header className="info-header">
          <div className="accent-line"></div>
          <h1>THE CHALLENGE <span className="text-highlight font-outline">INFO</span></h1>
        </header>

        <section className="info-section">
          <div className="info-grid">
            <div className="info-item">
              <span className="step-num">// 01</span>
              <h3>Objective</h3>
              <p>Solve technical problems and demonstrate your ability to build scalable, clean, and efficient solutions.</p>
            </div>
            <div className="info-item">
              <span className="step-num">// 02</span>
              <h3>Assessment</h3>
              <p>We pay attention to the quality of your code, architecture, and how you have documented your solutions.</p>
            </div>
            <div className="info-item">
              <span className="step-num">// 03</span>
              <h3>Submission</h3>
              <p>Once you're ready, upload your project as a ZIP file directly through the hackathon portal.</p>
            </div>
          </div>
        </section>


        
        <div className="challenge-box" id="unlocking-soon">
            <h2>UNLOCKING SOON</h2>
        <div className="challenge-image">
            <img src="/questionmark.png"/> 
        </div>
            <p><h3>We are currently finalizing the first set of technical challenges. Prepare your stack and stay tuned - the first block drops shortly.</h3></p>
        </div>
  



        <div className="challenge-box" id="innovation-track">
            <h2>INNOVATION TRACK</h2>
        <div className="challenge-image">
            <img src="/questionmark.png"/> 
        </div>
            <p><h3>Focus on real-world impact. We\'re bringing together the brightest minds to solve complex problems with cutting-edge tech.</h3></p>
        </div>



        <div className="challenge-box" id="mystery-challenge">
            <h2>MYSTERY CHALLENGE</h2>
        <div className="challenge-image">
            <img src="/questionmark.png"/> 
        </div>
            <p><h3>A deep dive into AI and automation awaits. This track will test your ability to build scalable solutions under pressure.</h3></p>
        </div>
      
    </div>
    </div>
  );
}

export default ChallengePage;