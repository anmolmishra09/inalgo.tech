import React from 'react';
import './CTASection.css';
import GlassBorderButton from './GlassBorderButton';

function CTASection({ 
  badge = "Development & Innovation",
  title = "Join 10,000+ Businesses",
  titleGradient = "Building the Future with Inalgo",
  description = "Transform your ideas into reality with our expert team.",
  buttonText = "Get Started",
  buttonLink = "/contact"
}) {
  return (
    <section className="cta-gradient-section">
      <div className="cta-gradient-container">
        <div className="cta-gradient-content">
          <p className="cta-badge">
            {badge}
          </p>
          <h2 className="cta-title">
            {title} <span className="cta-title-gradient">{titleGradient}</span>
          </h2>
          <p className="cta-description">{description}</p>
          <GlassBorderButton variant="purple">
            <a href={buttonLink} style={{ textDecoration: 'none', color: 'inherit' }}>
              {buttonText}
            </a>
          </GlassBorderButton>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
