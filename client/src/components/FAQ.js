import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Inalgo offer?",
      answer: "Inalgo offers full-stack web development, mobile app development, UI/UX design, cloud solutions, and custom software development tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We provide comprehensive support packages including bug fixes, updates, performance optimization, and 24/7 technical support for all our clients."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in React, Node.js, Express, MongoDB, PostgreSQL, AWS, and modern web technologies. We choose the best tech stack for your specific requirements."
    },
    {
      question: "Can you work with our existing codebase?",
      answer: "Absolutely! Our team is experienced in taking over existing projects, conducting code reviews, and seamlessly integrating new features into your current system."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile methodology with regular sprints, continuous communication, code reviews, and thorough testing to ensure quality and transparency throughout the project."
    },
    {
      question: "How do you ensure project security?",
      answer: "We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations."
    },
    {
      question: "What makes Inalgo different from other agencies?",
      answer: "We combine technical expertise with a client-focused approach, delivering scalable solutions on time and within budget. Our team is dedicated to your success from concept to deployment."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            We're here to help you and solve doubts. Find answers to the most common questions below.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <div className="faq-question">
                <span className="faq-question-text">{faq.question}</span>
                <div className={`faq-icon ${openIndex === index ? 'faq-icon-open' : ''}`}>
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  )}
                </div>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
