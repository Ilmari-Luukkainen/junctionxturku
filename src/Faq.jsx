import React, { useState } from 'react';
import './Faq.css'; 
import { questions } from './Faqdata';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  // SEO: Generoidaan JSON-LD Schema.org Googlea varten
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.info
      }
    }))
  };

  return (
    <section id="faq" className="faq-container" aria-labelledby="faq-title">
      {/* Google-roboteille tarkoitettu metadata */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <h2 id="faq-title" className="faq-title">Frequently Asked Questions.</h2>
      
      <div className="faq-list">
        {questions.map((q) => {
          const isOpen = openId === q.id;
          return (
            <div 
              key={q.id} 
              className="faq-item" 
              itemScope 
              itemType="https://schema.org/Question"
            >
              <button 
                className="faq-button" 
                onClick={() => setOpenId(isOpen ? null : q.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${q.id}`}
                type="button"
              >
                <span className="faq-question-text" itemProp="name">{q.title}</span>
                <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              
              <div 
                id={`faq-answer-${q.id}`}
                className={`faq-answer ${isOpen ? 'open' : ''}`}
                itemScope 
                itemType="https://schema.org/Answer" 
                itemProp="acceptedAnswer"
                role="region"
                hidden={!isOpen} // Tehokkuus: Piilotetaan mutta pidetään DOMissa botteja varten
              >
                <div itemProp="text">
                  {q.info}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;