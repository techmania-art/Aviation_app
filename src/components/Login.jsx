// FAQPage.js
import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  font-family: 'Arial Black', Gadget, sans-serif;
  min-height: 100vh;
`;

const FAQTitle = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const FAQPage = () => {
  const faqs = [
    {
      question: 'How do I book a flight?',
      answer: 'To book a flight, simply enter your destination, dates, and number of passengers in the search bar. You can then choose from a list of available flights and complete your booking by providing the necessary details and payment information.',
    },
    {
      question: 'Can I cancel or change my booking?',
      answer: 'Yes, you can cancel or change your booking by visiting the "My Trips" section in your account. Please note that cancellation or change fees may apply, depending on the airline\'s policy.',
    },
    {
      question: 'How do I check my flight status?',
      answer: 'You can check your flight status by entering your flight number or destination in the "Flight Status" section of our app. We provide real-time updates on departure and arrival times.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods, including credit/debit cards, net banking, and mobile wallets. All transactions are secure and encrypted.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team through the "Help" section in the app. We offer 24/7 support via chat, email, and phone.',
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </FAQContainer>
  );
};

export default FAQPage;
