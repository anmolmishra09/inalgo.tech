import React, { useMemo, useState } from 'react';
import './Contact.css';
import Toast from '../components/Toast';
// SEO Component
import SEO from '../components/SEO';

const CONTACT = {
  email: 'inaialgo@gmail.com',
  whatsapp: '919026395833',
  phone: '+91 8787222966',
  linkedin: 'https://www.linkedin.com/company/in-algo09/',
  github: 'https://github.com/anmolmishra09',
  location: 'Bengaluru, Karnataka, India',
};

const inquiryTypes = [
  'AI / ML Solution',
  'Web / Product Development',
  'Enterprise Automation',
  'RAG / Knowledge Platform',
  'Partnership',
  'General Inquiry',
];

const budgetOptions = [
  'Under ₹1 Lakh',
  '₹1–5 Lakh',
  '₹5–10 Lakh',
  '₹10 Lakh+',
  'Not decided yet',
];

const timelineOptions = [
  'ASAP',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'Flexible',
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    budget: '',
    timeline: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [showToast, setShowToast] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const completion = useMemo(() => {
    const fields = ['name', 'email', 'inquiryType', 'subject', 'message'];
    const completed = fields.filter((field) => formData[field].trim()).length;
    return Math.round((completed / fields.length) * 100);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const whatsappMessage =
      `*New Inalgo Client Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Company:* ${formData.company || 'Not provided'}\n` +
      `*Inquiry:* ${formData.inquiryType || 'General Inquiry'}\n` +
      `*Budget:* ${formData.budget || 'Not specified'}\n` +
      `*Timeline:* ${formData.timeline || 'Not specified'}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Project Details:*\n${formData.message}`;

    openWhatsApp(whatsappMessage);
    setStatus('success');
    setShowToast(true);

    setFormData({
      name: '',
      email: '',
      company: '',
      inquiryType: '',
      budget: '',
      timeline: '',
      subject: '',
      message: '',
    });
  };

  const handleQuickContact = (type) => {
    setActiveContact(type);

    if (type === 'email') {
      window.location.href =
        `mailto:${CONTACT.email}?subject=${encodeURIComponent('Project Inquiry - Inalgo')}`;
      return;
    }

    if (type === 'whatsapp') {
      openWhatsApp(
        'Hi Inalgo, I would like to discuss a project. Please let me know a convenient time to connect.'
      );
      return;
    }

    if (type === 'linkedin') {
      window.open(CONTACT.linkedin, '_blank', 'noopener,noreferrer');
      return;
    }

    if (type === 'github') {
      window.open(CONTACT.github, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <SEO
        title="Contact | Inalgo"
        description="Get in touch with Inalgo to discuss your project. We offer AI/ML solutions, web/product development, enterprise automation, and more. Contact us via email, WhatsApp, or schedule a consultation."
        canonicalUrl="https://inalgo.tech/contact"
        openGraph={{
          url: "https://inalgo.tech/contact",
          title: "Contact | Inalgo",
          description: "Get in touch with Inalgo to discuss your project. We offer AI/ML solutions, web/product development, enterprise automation, and more. Contact us via email, WhatsApp, or schedule a consultation.",
          image: "https://inalgo.tech/logo.png"
        }}
        twitter={{
          url: "https://inalgo.tech/contact",
          title: "Contact | Inalgo",
          description: "Get in touch with Inalgo to discuss your project. We offer AI/ML solutions, web/product development, enterprise automation, and more. Contact us via email, WhatsApp, or schedule a consultation.",
          image: "https://inalgo.tech/logo.png"
        }}
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact | Inalgo",
          "description": "Get in touch with Inalgo to discuss your project. We offer AI/ML solutions, web/product development, enterprise automation, and more. Contact us via email, WhatsApp, or schedule a consultation.",
          "url": "https://inalgo.tech/contact",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://inalgo.tech/contact?s={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "Karnataka",
            "addressCountry": "IN",
            "postalCode": "560001"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-8787222966",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "contactType": "Email",
              "emailAddress": "inalgo@gmail.com",
              "availableLanguage": ["English"]
            }
          ]
        }}
      />
      <main className="contact-page">
      {showToast && (
        <div className="contact-toast">
          <Toast
            message="WhatsApp is ready"
            description="Your project details have been prepared for the Inalgo team."
            type="success"
            duration={5000}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

      <section className="contact-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="container contact-hero-inner">
          <span className="contact-badge">
            <span className="badge-dot" />
            Start a conversation
          </span>

          <h1>Let&apos;s build something intelligent.</h1>

          <p className="lead">
            Tell us what you are building, what is blocking you, or where you
            want to take your product next. We&apos;ll turn the conversation
            into a clear technical path forward.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="hero-action primary"
              onClick={() =>
                document
                  .getElementById('contact-form')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Discuss your project <span>→</span>
            </button>

            <a className="hero-action secondary" href={`mailto:${CONTACT.email}`}>
              Email the team <span>↗</span>
            </a>
          </div>

          <div className="trust-row">
            <span><strong>AI &amp; ML</strong> engineering</span>
            <span><i /> Product development</span>
            <span><i /> Enterprise automation</span>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-intro">
            <div>
              <span className="section-kicker">CONTACT OPTIONS</span>
              <h2>Choose the way that works for you.</h2>
            </div>
            <p>
              Prefer a direct conversation? Use one of the channels below.
              For a structured project discussion, use the inquiry form.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-header">
                <div>
                  <span className="eyebrow">DIRECT CONNECTION</span>
                  <h3>Talk to the team</h3>
                </div>
                <span className="availability-pill">
                  <span /> Available
                </span>
              </div>

              <div className="info-items">
                <button
                  type="button"
                  className={`info-item ${activeContact === 'email' ? 'is-active' : ''}`}
                  onClick={() => handleQuickContact('email')}
                >
                  <div className="info-icon email-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">Direct Email</span>
                    <strong className="info-handle">{CONTACT.email}</strong>
                    <span className="info-link">Send an email <b>→</b></span>
                  </div>
                  <span className="card-arrow">↗</span>
                </button>

                <button
                  type="button"
                  className={`info-item ${activeContact === 'whatsapp' ? 'is-active' : ''}`}
                  onClick={() => handleQuickContact('whatsapp')}
                >
                  <div className="info-icon whatsapp-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2a9.5 9.5 0 0 0-8.1 14.47L2.5 21.5l5.18-1.36A9.5 9.5 0 1 0 12 2Zm5.24 13.56c-.22.62-1.28 1.15-1.76 1.2-.45.05-1.02.07-1.65-.1-.38-.1-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.49-3.98-.13-.18-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.26.53-.32.71-.32h.51c.16 0 .38-.06.59.45.22.53.74 1.82.8 1.95.07.13.11.29.02.47-.09.18-.13.29-.27.45-.13.16-.28.36-.4.48-.13.13-.27.27-.12.53.15.26.66 1.09 1.42 1.76.98.87 1.81 1.14 2.07 1.27.26.13.41.11.56-.07.15-.18.64-.74.81-1 .17-.26.34-.22.58-.13.24.09 1.52.72 1.78.85.26.13.44.2.51.31.07.11.07.64-.15 1.26Z" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">WhatsApp Business</span>
                    <strong className="info-handle">{CONTACT.phone}</strong>
                    <span className="info-link">Start a direct chat <b>→</b></span>
                  </div>
                  <span className="card-arrow">↗</span>
                </button>

                <button
                  type="button"
                  className={`info-item ${activeContact === 'linkedin' ? 'is-active' : ''}`}
                  onClick={() => handleQuickContact('linkedin')}
                >
                  <div className="info-icon linkedin-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.5A1.75 1.75 0 1 1 6.5 3a1.75 1.75 0 0 1 0 3.5ZM21 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19Z" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">LinkedIn Organization</span>
                    <strong className="info-handle">in-algo09</strong>
                    <span className="info-link">View our LinkedIn <b>→</b></span>
                  </div>
                  <span className="card-arrow">↗</span>
                </button>

                <button
                  type="button"
                  className={`info-item ${activeContact === 'github' ? 'is-active' : ''}`}
                  onClick={() => handleQuickContact('github')}
                >
                  <div className="info-icon github-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">GitHub</span>
                    <strong className="info-handle">@anmolmishra09</strong>
                    <span className="info-link">Explore projects <b>→</b></span>
                  </div>
                  <span className="card-arrow">↗</span>
                </button>

                <div className="info-item static-item">
                  <div className="info-icon location-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 10c0 5.5-8 12-8 12S4 15.5 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div className="info-details">
                    <span className="info-label">Engineering Hub</span>
                    <strong className="info-handle">{CONTACT.location}</strong>
                    <span className="info-subtext">The Silicon Valley of India</span>
                  </div>
                </div>
              </div>

              <div className="client-note">
                <div className="client-note-icon">✦</div>
                <div>
                  <strong>Not sure what to ask?</strong>
                  <p>
                    Share your idea in plain language. We&apos;ll help shape the
                    technical requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper" id="contact-form">
              <div className="form-heading">
                <div>
                  <span className="eyebrow">PROJECT BRIEF</span>
                  <h3>Tell us about your project</h3>
                  <p>A few details help us understand your needs before we connect.</p>
                </div>
                <div className="completion">
                  <strong>{completion}%</strong>
                  <span>complete</span>
                </div>
              </div>

              <div className="progress-track" aria-hidden="true">
                <span style={{ width: `${completion}%` }} />
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid two">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <em>*</em></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Alex Rivera"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Work Email <em>*</em></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>

                <div className="form-grid two">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">What can we help with? <em>*</em></label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {inquiryTypes.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid two">
                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">Desired Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select a timeline</option>
                      {timelineOptions.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <em>*</em></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. AI customer support platform"
                  />
                </div>

                <div className="form-group">
                  <div className="label-row">
                    <label htmlFor="message">Project Details <em>*</em></label>
                    <span>{formData.message.length}/1000</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={1000}
                    rows={6}
                    placeholder="What are you trying to build? Include goals, users, existing technology, or any important constraints."
                  />
                </div>

                <div className="form-footer">
                  <div className="form-security">
                    <span>✓</span>
                    <p>Your details stay private and are only used to respond to your inquiry.</p>
                  </div>

                  <button
                    type="submit"
                    className="contact-btn-submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="button-spinner" />
                        Preparing WhatsApp...
                      </>
                    ) : (
                      <>
                        Send project inquiry
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>

                {status === 'success' && (
                  <p className="form-message success" role="status">
                    Your inquiry is prepared. WhatsApp should open with the details ready to send.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <div>
              <span className="section-kicker">ENGINEERING HUB</span>
              <h2>Built from Bengaluru. Connected globally.</h2>
            </div>
            <p>Our listed engineering hub is in Bengaluru, Karnataka, India.</p>
          </div>

          <div className="map-container">
            <iframe
              title="Inalgo Engineering Hub - Bengaluru"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491188665!2d77.30126421902398!3d12.954294257077642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1709470000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="map-bottom">
            <span>📍 Bengaluru, Karnataka, India</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bengaluru%2C%20Karnataka%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Contact;