import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import FAQHeader from './components/FAQHeader';
import FAQList from './components/FAQList';
import BackButton from './components/BackButton';
//import { faqData } from './data/faqData';
import './styles/FAQ.css';

const FAQPage = ({ onBack }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Fetch FAQs from Firestore
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'faqs'));
        const faqList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Optionally include the document ID
          ...doc.data(),
        }));
        console.log('Fetched FAQs:', faqList);
        setFaqs(faqList);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <BackButton onClick={onBack} />
      <FAQHeader />
      {loading ? (
        <p>Loading FAQs...</p> // Show a loading message while fetching data
      ) : (
        <FAQList faqs={faqs} /> // Pass the fetched FAQs to FAQList
      )}
    </div>
  );
};

export default FAQPage;