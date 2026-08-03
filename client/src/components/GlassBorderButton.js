import React from 'react';
import './GlassBorderButton.css';

function GlassBorderButton({ 
  children = 'Click Me', 
  onClick, 
  className = '',
  variant = 'default' // 'default', 'purple', 'blue'
}) {
  return (
    <div className={`glass-border-wrapper ${variant} ${className}`}>
      <button 
        className="glass-border-button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default GlassBorderButton;
