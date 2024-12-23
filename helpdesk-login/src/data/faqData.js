import { db } from '../firebaseConfig';
import { setDoc, doc } from "firebase/firestore";

const faqData = {
  faqs: {
    faq1: {
      question: "How do I submit an amendment request?",
      answer: "You can submit amendment requests through the UTM portal at https://my.utm.my/. Log in with your credentials and navigate to the 'Amendment Requests' section.",
      category: "Registration"
    },
    faq2: {
      question: "What are the Faculty's office hours?",
      answer: "The Faculty of Computing office is open Monday through Friday, 8:00 AM to 5:00 PM. The office is closed on weekends and public holidays.",
      category: "General Information"
    },
    faq3: {
      question: "Where can I find my class schedule?",
      answer: "Your class schedule is available in the UTM portal (https://my.utm.my/). After logging in, go to the 'Academic' section and select 'Class Schedule'.",
      category: "Schedule"
    }
  }
};

const uploadFAQs = async () => {
  try {
    for (const [key, value] of Object.entries(faqData.faqs)) {
      await setDoc(doc(db, "faqs", key), value); // 'faqs' is the collection, 'key' is the document ID
    }
    console.log("FAQs uploaded successfully!");
  } catch (error) {
    console.error("Error uploading FAQs:", error);
  }
};

//uploadFAQs();
