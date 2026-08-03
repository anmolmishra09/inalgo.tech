import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // TODO: Add newsletter subscription logic
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <h2 className="newsletter-title">
              Subscribe <span className="newsletter-highlight">newsletter</span>
            </h2>
            <p className="newsletter-description">
              A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              className="newsletter-input" 
              placeholder="Enter your email address" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
