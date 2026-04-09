import React from 'react';
import './ChallengePage.css';

const ChallengePage = () => {
  return (
    /* SEO: Main-tagi kertoo hakukoneelle sivun pääasiallisen sisällön */
    <main className="info-container">
      {/* Koriste-elementit piilotettu ruudunlukijoilta tehokkuuden ja saavutettavuuden vuoksi */}
      <div className="bg-glow top-glow" aria-hidden="true"></div>
      <div className="bg-glow bottom-glow" aria-hidden="true"></div>

      <div className="info-content">
        <header className="info-header">
          <div className="accent-line" aria-hidden="true"></div>
          <h1>THE CHALLENGE <span className="text-highlight font-outline">INFO</span></h1>
        </header>

        {/* SEO: Section ja selkeä otsikko-hierarkia (h1 -> h2 -> h3) */}
        <section className="info-section" aria-labelledby="info-title">
          <h2 id="info-title" className="sr-only">How it works</h2>
          <div className="info-grid">
            <article className="info-item">
              <span className="step-num" aria-hidden="true">// 01</span>
              <h3>Objective</h3>
              <p>Solve technical problems and demonstrate your ability to build scalable, clean, and efficient solutions.</p>
            </article>
            <article className="info-item">
              <span className="step-num" aria-hidden="true">// 02</span>
              <h3>Assessment</h3>
              <p>We pay attention to the quality of your code, architecture, and how you have documented your solutions.</p>
            </article>
            <article className="info-item">
              <span className="step-num" aria-hidden="true">// 03</span>
              <h3>Submission</h3>
              <p>Once you're ready, upload your project as a ZIP file directly through the hackathon portal.</p>
            </article>
          </div>
        </section>

        {/* SEO: Jokainen haaste on oma 'article' taginsa */}
        <article className="challenge-box" id="unlocking-soon">
          <h2>UNLOCKING SOON</h2>
          <div className="challenge-image">
            {/* Performance: Mitat estävät CLS:n, lazy loading säästää kaistaa */}
            <img 
              src="./questionmark.webp" 
              alt="Coming soon mystery challenge placeholder" 
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            /> 
          </div>
          <div className="challenge-description">
            <p>We are currently finalizing the first set of technical challenges. Prepare your stack and stay tuned - the first block drops shortly.</p>
          </div>
        </article>

        <article className="challenge-box" id="innovation-track">
          <h2>INNOVATION TRACK</h2>
          <div className="challenge-image">
            <img 
              src="./questionmark.webp" 
              alt="Innovation track mystery placeholder" 
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            /> 
          </div>
          <div className="challenge-description">
            <p>Focus on real-world impact. We're bringing together the brightest minds to solve complex problems with cutting-edge tech.</p>
          </div>
        </article>

        <article className="challenge-box" id="mystery-challenge">
          <h2>MYSTERY CHALLENGE</h2>
          <div className="challenge-image">
            <img 
              src="./questionmark.webp" 
              alt="Deep dive AI and automation mystery placeholder" 
              loading="lazy"
              decoding="async"
              width="800"
              height="450"
            /> 
          </div>
          <div className="challenge-description">
            <p>A deep dive into AI and automation awaits. This track will test your ability to build scalable solutions under pressure.</p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default ChallengePage;