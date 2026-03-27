import React, { useState } from 'react';
import './Faq.css'; 
import { questions } from './Faqdata';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="faq-container">
      <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS (FAQ).</h1>
      
      {questions.map((q) => (
        <div key={q.id} className="faq-item">
          <button 
            className="faq-button" 
            onClick={() => setOpenId(openId === q.id ? null : q.id)}
          >
            <span className="faq-question-text">{q.title}</span>
            <span className="faq-icon">{openId === q.id ? '−' : '+'}</span>
          </button>
          
          {openId === q.id && (
            <div className="faq-answer">
              {q.info}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;