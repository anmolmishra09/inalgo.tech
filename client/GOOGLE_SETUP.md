# Google OAuth Setup Guide

## Overview
This application uses Google OAuth 2.0 for authentication. Follow these steps to set up Google Sign-In functionality.

## Prerequisites
- A Google account
- Access to Google Cloud Console

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "Inalgo Auth")
5. Click "Create"

### 2. Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on it and click "Enable"

### 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in the required fields (app name, user support email, developer contact)
   - Add scopes: `email` and `profile`
   - Add test users if needed
   - Save and continue

4. Back in "Create OAuth client ID":
   - Application type: **Web application**
   - Name: "Inalgo Web Client" (or any name you prefer)
   
5. **Add Authorized JavaScript origins:**
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`
   
6. **Add Authorized redirect URIs:**
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`
   
7. Click "Create"
8. **Copy the Client ID** that is displayed

### 4. Configure Your Application

1. Open the `.env` file in the `client` folder
2. Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Client ID:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
   ```
3. Save the file

### 5. Restart Your Development Server

```bash
cd client
npm start
```

## Testing

1. Navigate to the Sign In page
2. Click the "Google" button
3. Select your Google account
4. Grant permissions
5. You should be redirected to the home page with a welcome message

## Important Notes

- **Never commit your `.env` file** to version control. The `.gitignore` file should already exclude it.
- For production, make sure to:
  - Add your production domain to authorized origins and redirect URIs
  - Set up proper backend authentication to validate the Google tokens
  - Store user sessions securely
  - Use HTTPS

## What Happens During Sign-In?

1. User clicks the Google button
2. Google OAuth popup opens
3. User selects/logs in with their Google account
4. Google returns an access token
5. The app fetches user info from Google (name, email, profile picture)
6. User data is stored in `localStorage`
7. User is redirected to the home page

## Troubleshooting

### "Invalid Client ID" Error
- Verify your Client ID is correct in `.env`
- Make sure you restarted the development server after changing `.env`

### "Redirect URI Mismatch" Error
- Check that `http://localhost:3000` is added to authorized redirect URIs
- Make sure there are no trailing slashes

### "Access Blocked" Error
- Add your email as a test user in the OAuth consent screen
- Make sure the OAuth consent screen is properly configured

## Backend Integration (Optional)

For production apps, you should:

1. Send the Google token to your backend
2. Verify the token server-side
3. Create a user session
4. Return a JWT or session token

Example backend endpoint:
```javascript
// POST /api/auth/google
{
  "googleToken": "token_from_frontend"
}
```

## Resources

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [React OAuth Google Library](https://www.npmjs.com/package/@react-oauth/google)
- [Google Cloud Console](https://console.cloud.google.com/)
