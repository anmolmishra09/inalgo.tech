import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Sign in:', formData);
    // TODO: Add your authentication logic here
    // After successful login, navigate to home
    // navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google Login Success:', tokenResponse);
      
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
        
        // Navigate to home page after successful login
        alert(`Welcome ${userData.name}! You are now signed in.`);
        navigate('/');
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to complete Google sign-in');
      }
    },
    onError: (error) => {
      console.error('Google Login Failed:', error);
      alert('Google sign-in failed. Please try again.');
    },
  });

  return (
    <div className="signin-page-fullscreen">
      <div className="signin-image-container">
        <img 
          className="signin-image" 
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png" 
          alt="leftSideImage" 
        />
      </div>
    
      <div className="signin-form-container">
        <form className="signin-form-centered" onSubmit={handleSubmit}>
          <h2 className="signin-heading">Sign in</h2>
          <p className="signin-description">Welcome back! Please sign in to continue</p>
    
          <button 
            type="button" 
            className="google-signin-btn"
            onClick={handleGoogleLogin}
          >
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" 
              alt="googleLogo" 
            />
          </button>
    
          <div className="signin-divider">
            <div className="signin-divider-line"></div>
            <p className="signin-divider-text">or sign in with email</p>
            <div className="signin-divider-line"></div>
          </div>
    
          <div className="signin-input-wrapper">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280"/>
            </svg>
            <input 
              type="email" 
              name="email"
              placeholder="Email id" 
              className="signin-email-input" 
              required 
              value={formData.email}
              onChange={handleChange}
            />                 
          </div>
    
          <div className="signin-input-wrapper signin-password-wrapper">
            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280"/>
            </svg>
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              className="signin-password-input" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
          </div>
    
          <div className="signin-footer-options">
            <div className="signin-remember-me">
              <input 
                className="signin-checkbox" 
                type="checkbox" 
                id="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="signin-checkbox-label" htmlFor="checkbox">Remember me</label>
            </div>
            <Link className="signin-forgot-link" to="/forgot-password">Forgot password?</Link>
          </div>
    
          <button type="submit" className="signin-submit-btn">
            Login
          </button>
          <p className="signin-signup-text">
            Don't have an account? <Link className="signin-signup-link" to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
