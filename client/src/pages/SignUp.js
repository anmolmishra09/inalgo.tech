import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Sign up:', formData);
    // TODO: Add your registration logic here
    // After successful signup, navigate to home or OTP verification
    // navigate('/otp-verification');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleSignup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google Signup Success:', tokenResponse);
      
      try {
        // Fetch user info from Google
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        
        const userData = await userInfo.json();
        console.log('User Data:', userData);
        
        // Store user data in localStorage or send to your backend
        localStorage.setItem('user', JSON.stringify({
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          googleId: userData.sub
        }));
        
        // Navigate to home page after successful signup
        alert(`Welcome ${userData.name}! Your account has been created.`);
        navigate('/');
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to complete Google sign-up');
      }
    },
    onError: (error) => {
      console.error('Google Signup Failed:', error);
      alert('Google sign-up failed. Please try again.');
    },
  });

  return (
    <div className="signup-page-fullscreen">
      <div className="signup-image-container">
        <img 
          className="signup-image" 
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" 
          alt="leftSideImage" 
        />
      </div>
    
      <div className="signup-form-container">
        <form className="signup-form-centered" onSubmit={handleSubmit}>
          <h2 className="signup-heading">Sign up</h2>
          <p className="signup-description">Create your account to get started</p>
    
          <button 
            type="button" 
            className="google-signup-btn"
            onClick={handleGoogleSignup}
          >
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" 
              alt="googleLogo" 
            />
          </button>
    
          <div className="signup-divider">
            <div className="signup-divider-line"></div>
            <p className="signup-divider-text">or sign up with email</p>
            <div className="signup-divider-line"></div>
          </div>
    
          <div className="signup-input-wrapper">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9ZM8 9C4.68629 9 2 11.6863 2 15V17H14V15C14 11.6863 11.3137 9 8 9Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input 
              type="text" 
              name="fullName"
              placeholder="Full name" 
              className="signup-input" 
              required 
              value={formData.fullName}
              onChange={handleChange}
            />                 
          </div>

          <div className="signup-input-wrapper signup-email-wrapper">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
            </svg>
            <input 
              type="email" 
              name="email"
              placeholder="Email id" 
              className="signup-input" 
              required 
              value={formData.email}
              onChange={handleChange}
            />                 
          </div>
    
          <div className="signup-input-wrapper signup-password-wrapper">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
            </svg>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              className="signup-input" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="signup-input-wrapper signup-confirm-wrapper">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
            </svg>
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm password" 
              className="signup-input" 
              required 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
    
          <button type="submit" className="signup-submit-btn">
            Create Account
          </button>
          <p className="signup-signin-text">
            Already have an account? <Link className="signup-signin-link" to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
