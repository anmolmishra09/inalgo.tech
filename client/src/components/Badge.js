import React from 'react';
import './Badge.css';

function Badge({ label = 'NEW', text = 'Click here for more information', href = '#' }) {
  return (
    <a href={href} className="info-badge">
      <span className="badge-label">
        {label}
      </span>
      <p className="badge-text">
        <span>{text}</span>
        <svg className="badge-arrow" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m1 1 4 3.5L1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </p>
    </a>
  );
}

export default Badge;
