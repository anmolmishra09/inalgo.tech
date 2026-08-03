import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Password reset email sent to:', email);
      setIsSubmitted(true);
      setIsLoading(false);
      // Add your password reset logic here
    }, 1500);
  };

  const handleResend = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <div className="forgot-password-page">
      <div className="container">
        <div className="forgot-password-card">
          {!isSubmitted ? (
            <>
              <div className="forgot-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  <circle cx="12" cy="16" r="1"/>
                </svg>
              </div>

              <h2 className="forgot-title">Forgot Password?</h2>
              <p className="forgot-subtitle">
                No worries! Enter your email address and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <div className="input-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>
              </form>

              <div className="footer-links">
                <Link to="/signin" className="back-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 19-7-7 7-7"/>
                    <path d="M19 12H5"/>
                  </svg>
                  Back to Sign In
                </Link>
                <p className="signup-text">
                  Don't have an account?{' '}
                  <Link to="/signup" className="signup-link">
                    Sign Up
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <div className="success-container">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
              </div>
              
              <h2 className="success-title">Check Your Email</h2>
              <p className="success-subtitle">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="success-info">
                Please check your inbox and click on the link to reset your password. The link will expire in 24 hours.
              </p>

              <button 
                type="button" 
                className="submit-btn"
                onClick={() => window.location.href = '/signin'}
              >
                Back to Sign In
              </button>

              <p className="resend-text">
                Didn't receive the email?{' '}
                <button 
                  type="button" 
                  onClick={handleResend} 
                  className="resend-link"
                >
                  Resend
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
