import React, { useState, useRef, useEffect } from 'react';
import './OTPVerification.css';

function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Only process if it's 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      // Focus last input
      inputRefs.current[5].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    if (otpCode.length === 6) {
      console.log('OTP Submitted:', otpCode);
      // Add your verification logic here
      // Example: verifyOTP(otpCode);
    } else {
      alert('Please enter all 6 digits');
    }
  };

  const handleResend = () => {
    console.log('Resending OTP...');
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0].focus();
    // Add your resend logic here
  };

  return (
    <div className="otp-page">
      <div className="container">
        <div className="otp-card">
          <div className="otp-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          
          <h2 className="otp-title">Email Verify OTP</h2>
          <p className="otp-subtitle">Enter the 6-digit code sent to your email ID.</p>

          <form onSubmit={handleVerify}>
            <div className="otp-inputs" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="otp-input"
                  aria-label={`Digit ${index + 1}`}
                />
              ))}
            </div>

            <button type="submit" className="verify-btn">
              Verify Email
            </button>
          </form>

          <div className="otp-footer">
            <p className="resend-text">
              Didn't receive the code?{' '}
              <button type="button" onClick={handleResend} className="resend-link">
                Resend OTP
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
