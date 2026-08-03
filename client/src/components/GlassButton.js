import React from 'react';
import './GlassButton.css';

function GlassButton({ 
  children = 'Click Me', 
  onClick, 
  href,
  type = 'button',
  className = '' 
}) {
  const buttonContent = (
    <button 
      type={type}
      className={`glass-button-inner ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const wrapperClasses = "glass-button-wrapper";

  if (href) {
    return (
      <a href={href} className={wrapperClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <div className={wrapperClasses}>
      {buttonContent}
    </div>
  );
}

export default GlassButton;
