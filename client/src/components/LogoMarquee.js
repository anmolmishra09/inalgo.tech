import React from 'react';
import './LogoMarquee.css';

function LogoMarquee() {
  const companyLogos = [
    { name: "slack", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/slack.svg" },
    { name: "framer", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/framer.svg" },
    { name: "netflix", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/netflix.svg" },
    { name: "google", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/google.svg" },
    { name: "linkedin", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/linkedin.svg" },
    { name: "instagram", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/instagram.svg" },
    { name: "facebook", url: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/facebook.svg" },
    { name: "microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
    { name: "twitter", url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" },
    { name: "adobe", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
    { name: "airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" }
  ];

  return (
    <section className="logo-marquee-section">
      <div className="logo-marquee-container">
        <div className="logo-marquee-header">
          <h2 className="logo-marquee-title">Trusted by industry leaders</h2>
          <p className="logo-marquee-subtitle">Join thousands of companies building with Inalgo</p>
        </div>

        <div className="logo-marquee-wrapper">
          <div className="logo-marquee-fade-left"></div>
          
          <div className="logo-marquee-track">
            <div className="logo-marquee-content">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div key={index} className="logo-marquee-item">
                  <img 
                    src={company.url} 
                    alt={company.name}
                    className="logo-marquee-image"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="logo-marquee-fade-right"></div>
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;
