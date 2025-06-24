# Google Authentication Setup Guide

This guide explains how to set up Google OAuth for authentication in the Mroncy School of Welding application.

## Prerequisites

1. A Google Cloud Platform account
2. Access to the Google Cloud Console

## Steps to Configure Google OAuth

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on "Select a project" at the top of the page
3. Click on "New Project"
4. Enter a name for your project and click "Create"

### 2. Configure the OAuth Consent Screen

1. In your project, go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type and click "Create"
3. Fill in the required information:
   - App name: "Mroncy School of Welding"
   - User support email: Your email address
   - Developer contact information: Your email address
4. Click "Save and Continue"
5. Skip adding scopes and click "Save and Continue"
6. Add test users if needed and click "Save and Continue"
7. Review your settings and click "Back to Dashboard"

### 3. Create OAuth Client ID

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Name: "Mroncy School of Welding Web Client"
5. Add Authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `https://your-production-domain.com` (for production)
6. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://your-production-domain.com/api/auth/callback/google` (for production)
7. Click "Create"
8. Note your Client ID and Client Secret

### 4. Add Credentials to Environment Variables

Add the following to your `.env.local` file:

\`\`\`
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
\`\`\`

## Testing Google Authentication

1. Start your development server
2. Navigate to the login page
3. Click "Sign in with Google"
4. You should be redirected to Google's authentication page
5. After signing in, you should be redirected back to your application

## Troubleshooting

### Common Issues

1. **Redirect URI mismatch**: Ensure that the redirect URI in your Google Cloud Console matches exactly with your application's callback URL.

2. **Invalid Client ID or Secret**: Double-check that you've copied the correct values to your environment variables.

3. **Consent Screen Not Configured**: Make sure you've completed all steps in the OAuth consent screen setup.

4. **API Not Enabled**: Ensure the Google+ API is enabled for your project.

### Getting Help

If you encounter issues with Google authentication, check the following resources:

- [NextAuth.js Google Provider Documentation](https://next-auth.js.org/providers/google)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
