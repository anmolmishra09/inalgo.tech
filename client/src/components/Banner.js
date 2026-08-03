import React from 'react';
import './Banner.css';

function Banner({ text, href = '/services', onClose }) {
  return (
    <a href={href} className="promo-banner">
      <div className="banner-content">
        <p>{text || 'Transform your ideas into powerful web applications with Inalgo\'s expert development team.'}</p>
        <svg className="banner-arrow" width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.91797 7H11.0846" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 2.9165L11.0833 6.99984L7 11.0832" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {onClose && (
        <button 
          className="banner-close" 
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          aria-label="Close banner"
        >
          ×
        </button>
      )}
    </a>
  );
}

export default Banner;
