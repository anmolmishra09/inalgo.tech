import React from 'react';
import './AppPromotion.css';

function AppPromotion({ 
  title = "Download Mobile App",
  description = "Mobile banking app for iOS & Android to manage your online money.",
  imageUrl = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png",
  googlePlayUrl = "#",
  appStoreUrl = "#"
}) {
  return (
    <section className="app-promotion-section">
      <div className="app-promotion-container">
        <div className="app-promotion-content">
          <div className="app-promotion-text">
            <h2 className="app-promotion-title">{title}</h2>
            <p className="app-promotion-description">{description}</p>
            
            <div className="app-store-buttons">
              <a 
                href={googlePlayUrl} 
                className="store-button"
                aria-label="Download on Google Play"
              >
                <img 
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                  alt="Get it on Google Play"
                  className="store-badge"
                />
              </a>
              <a 
                href={appStoreUrl} 
                className="store-button"
                aria-label="Download on App Store"
              >
                <img 
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                  alt="Download on the App Store"
                  className="store-badge"
                />
              </a>
            </div>
          </div>
          
          <div className="app-promotion-image">
            <img 
              src={imageUrl}
              alt="Mobile App Preview"
              className="promo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromotion;
