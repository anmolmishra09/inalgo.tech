import React, { useState } from 'react';
import './Contact.css';
import Toast from '../components/Toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      await response.json();

      if (response.ok) {
        setStatus('success');
        setShowToast(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact">
      {/* Toast Notification */}
      {showToast && (
        <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 9999 }}>
          <Toast
            message="Successfully saved!"
            description="Your message has been sent. We'll get back to you soon."
            type="success"
            duration={5000}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">Get in touch with our team</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>
                Have a project in mind? Want to learn more about our services? 
                We'd love to hear from you!
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:inaialgo@gmail.com" className="info-link">
                      inaialgo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💬</div>
                  <div>
                    <h3>WhatsApp</h3>
                    <a href="https://wa.me/918787222966" target="_blank" rel="noopener noreferrer" className="info-link">
                      +91 8787222966
                    </a>
                    <p className="info-subtext">Chat with us instantly</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💼</div>
                  <div>
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/in-algo09/" target="_blank" rel="noopener noreferrer" className="info-link">
                      linkedin.com/company/in-algo09
                    </a>
                    <p className="info-subtext">Connect professionally</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h3>Location</h3>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">💻</div>
                  <div>
                    <h3>GitHub</h3>
                    <a href="https://github.com/anmolmishra09" target="_blank" rel="noopener noreferrer" className="info-link">
                      github.com/anmolmishra09
                    </a>
                    <p className="info-subtext">Check out our projects</p>
                  </div>
                </div>
              </div>

              <div className="social-connect">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://t.me/inaialgo" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/inalgo" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/in-algo09/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us more..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-message success">Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'error' && (
                  <p className="form-message error">Oops! Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Visit Our Office</h2>
          <p className="map-description">Find us in Bengaluru, India - The Silicon Valley of India</p>
          <div className="map-container">
            <iframe
              title="Inalgo Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491188665!2d77.30126421902398!3d12.954294257077642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1709470000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
