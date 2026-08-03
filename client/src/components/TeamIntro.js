import React from 'react';
import './TeamIntro.css';

function TeamIntro({ 
  title = "Meet the team Shaping the future.",
  description = "Our diverse team of engineers and designers are dedicated to building AI agents that simplify work and empower businesses.",
  buttonText = "Join our team",
  buttonLink = "/contact",
  imageUrl = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/team-meeting-image.png"
}) {
  return (
    <section className="team-intro-section">
      <div className="team-intro-container">
        <div className="team-intro-card">
          
          <div className="team-intro-content">
            <h1 className="team-intro-title">{title}</h1>
            <p className="team-intro-description">{description}</p>
            <a href={buttonLink} className="team-intro-button">
              {buttonText}
            </a>
          </div>
          
          <div className="team-intro-image">
            <img 
              src={imageUrl}
              alt="Team meeting"
              className="team-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamIntro;
