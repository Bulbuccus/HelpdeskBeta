import React, { useState } from 'react';

const FAQItem = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      {/* Question Button */}
      <button
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>

      {/* Answer and Category */}
      {isOpen && (
        <div className="faq-answer">
          <p><strong>Category:</strong> {category}</p> {/* Display category */}
          <p>{answer}</p> {/* Display answer */}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
