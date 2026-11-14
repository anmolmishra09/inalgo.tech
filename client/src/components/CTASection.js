import React from 'react';
import './CTASection.css';
import GlassBorderButton from './GlassBorderButton';

function CTASection({
  badge = 'Development & Innovation',
  title = 'Join 1,000+ Businesses',
  titleGradient = 'Building the Future with Inalgo',
  description = 'Transform your ideas into reality with our expert team of AI architects, full-stack engineers, and product designers.',
  buttonText = 'Get Started',
  buttonLink = '/contact',
  secondaryText = 'Explore Architecture',
  secondaryLink = '#expertise'
}) {
  return (
    <section className="cta-gradient-section" aria-labelledby="cta-heading">
      <div className="cta-gradient-container">
        <div className="cta-gradient-content">
          {/* Decorative Corner Grid Pattern */}
          <div className="cta-grid-pattern" aria-hidden="true" />

          {/* Floating Inalgo Project Emblem / Icon */}
          <div className="cta-brand-emblem" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5Z" />
              <path d="m2 17 10 5 10-5" />
              <path d="m2 12 10 5 10-5" />
            </svg>
          </div>

          {/* Pill Badge with Live Status Dot */}
          <div className="cta-badge">
            <span className="cta-badge-dot" aria-hidden="true" />
            <span className="cta-badge-text">{badge}</span>
          </div>

          {/* Headline */}
          <h2 id="cta-heading" className="cta-title">
            {title}{' '}
            <span className="cta-title-gradient">{titleGradient}</span>
          </h2>

          {/* Description */}
          <p className="cta-description">{description}</p>

          {/* Action Buttons Row */}
          <div className="cta-actions-row">
            <GlassBorderButton variant="purple">
              <a href={buttonLink} className="cta-glass-link">
                <span>{buttonText}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </GlassBorderButton>

            {secondaryText && (
              <a href={secondaryLink} className="cta-secondary-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>{secondaryText}</span>
              </a>
            )}
          </div>

          {/* Trust & Enterprise Highlights Bar */}
          <div className="cta-trust-strip">
            <div className="cta-trust-item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Enterprise-Grade Security</span>
            </div>

            <span className="cta-trust-divider" aria-hidden="true">•</span>

            <div className="cta-trust-item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>Rapid Production Deployment</span>
            </div>

            <span className="cta-trust-divider" aria-hidden="true">•</span>

            <div className="cta-trust-item">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>24/7 Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;