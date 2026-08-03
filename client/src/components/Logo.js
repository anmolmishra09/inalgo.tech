import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo({ variant = 'default', className = '' }) {
  return (
    <Link to="/" className={`logo-wrapper ${variant} ${className}`}>
      <div className="logo-container">
        <span className="logo-text">
          <span className="logo-primary">Inalgo</span>
        </span>
      </div>
    </Link>
  );
}

export default Logo;
