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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Build the formatted text for WhatsApp
    const whatsappMessage = 
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;

    // 2. URL-encode the message payload
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // 3. Target WhatsApp Number (+91 8787222066)
    const phoneNumber = '918787222966';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 4. Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // 5. Update UI feedback & reset form
    setStatus('success');
    setShowToast(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Toast Notification */}
      {showToast && (
        <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 9999 }}>
          <Toast
            message="Redirecting to WhatsApp!"
            description="Opening WhatsApp with your filled details."
            type="success"
            duration={5000}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <span className="contact-badge">Get In Touch</span>
          <h1>Contact Our Engineering Team</h1>
          <p className="lead">Have a project, query, or partnership in mind? Let's connect.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Interactive Contact Details */}
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p className="info-description">
                Reach out to us directly through any of our official channels below or submit a form inquiry.
              </p>

              <div className="info-items">
                
                {/* Email Item */}
                <div className="info-item">
                  <div className="info-icon email-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">Direct Email</span>
                    <h3 className="info-handle">inaialgo@gmail.com</h3>
                    <a href="mailto:inaialgo@gmail.com" className="info-link">
                      <span>Send Email</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="info-item">
                  <div className="info-icon whatsapp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">WhatsApp Business</span>
                    <h3 className="info-handle">+91 8787222066</h3>
                    <a href="https://wa.me/918787222066" target="_blank" rel="noopener noreferrer" className="info-link">
                      <span>Chat Directly</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="info-item">
                  <div className="info-icon linkedin-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">LinkedIn Organization</span>
                    <h3 className="info-handle">in-algo09</h3>
                    <a href="https://www.linkedin.com/company/in-algo09/" target="_blank" rel="noopener noreferrer" className="info-link">
                      <span>linkedin.com/company/in-algo09</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="info-item">
                  <div className="info-icon location-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">Engineering Hub</span>
                    <h3 className="info-handle">Bengaluru, KA, India</h3>
                    <p className="info-subtext">The Silicon Valley of India</p>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="info-item">
                  <div className="info-icon github-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">GitHub Engineer Lead</span>
                    <h3 className="info-handle">@anmolmishra09</h3>
                    <a href="https://github.com/anmolmishra09" target="_blank" rel="noopener noreferrer" className="info-link">
                      <span>github.com/anmolmishra09</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

              </div>
              
              <div className="social-connect">
                <div className="social-links">
                  
                  {/* Telegram
                  <a href="https://t.me/inaialgo" target="_blank" rel="noopener noreferrer" className="social-card telegram-card" aria-label="Telegram">
                    <div className="social-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                      </svg>
                    </div>
                    <div className="social-meta">
                      <span className="social-name">Telegram</span>
                      <span className="social-tag">@inaialgo</span>
                    </div>
                    <svg className="social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </a>

                  {/* GitHub Org */}
                  {/* <a href="https://github.com/inalgo" target="_blank" rel="noopener noreferrer" className="social-card github-card" aria-label="GitHub Organization">
                    <div className="social-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="social-meta">
                      <span className="social-name">GitHub Org</span>
                      <span className="social-tag">@inalgo</span>
                    </div>
                    <svg className="social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </a> */}

                  {/* LinkedIn */}
                  {/* <a href="https://www.linkedin.com/company/in-algo09/" target="_blank" rel="noopener noreferrer" className="social-card linkedin-card" aria-label="LinkedIn Page">
                    <div className="social-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="social-meta">
                      <span className="social-name">LinkedIn</span>
                      <span className="social-tag">in-algo09</span>
                    </div>
                    <svg className="social-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                  </a> */} 

                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Send a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Rivera"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
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
                    placeholder="e.g. Project Inquiry & Architecture"
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
                    placeholder="Tell us about your requirements or questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Opening WhatsApp...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="form-message success">Thank you! Opening WhatsApp to send your message...</p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Office Location Map */}
      <section className="map-section">
        <div className="container">
          <h2>Visit Our HQ</h2>
          <p className="map-description">Located in Bengaluru, Karnataka, India — The Silicon Valley of India</p>
          <div className="map-container">
            <iframe
              title="Inalgo Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491188665!2d77.30126421902398!3d12.954294257077642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1709470000000!5m2!1sen!2sin"
              width="100%"
              height="420"
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