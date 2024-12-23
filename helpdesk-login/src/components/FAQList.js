import React from 'react';
import FAQItem from './FAQItem';
//import { db } from '../firebaseConfig';
//import { collection, getDocs } from "firebase/firestore";

const FAQList = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return <p>No FAQs available.</p>; // Handle empty or undefined FAQ list
  }
  
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          category={faq.category} // Pass the new category prop
        />
      ))}
    </div>
  );
};

export default FAQList;
