# Authentication System Guide

This document provides a comprehensive overview of the authentication system implemented for the Mroncy School of Welding and Fabrication Engineering website.

## Overview

The authentication system is built using NextAuth.js with a custom database adapter. It supports:

- Email/password authentication
- Google OAuth authentication
- Session management
- Role-based access control
- Password reset functionality
- Email verification

## Environment Variables

The following environment variables need to be set:

\`\`\`env
# Authentication
NEXTAUTH_SECRET=your-nextauth-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret-key-here
SESSION_MAX_AGE=2592000
PASSWORD_RESET_EXPIRY=3600000

# Email (for verification and password reset)
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@mroncyschoolofwelding.com
ADMIN_EMAIL=admin@mroncyschoolofwelding.com
\`\`\`

## User Roles

The system supports the following user roles:

1. **STUDENT** - Default role for registered users
2. **INSTRUCTOR** - For teaching staff
3. **ADMIN** - For administrative staff
4. **SUPER_ADMIN** - For system administrators

## Authentication Flow

### Registration

1. User submits registration form with name, email, password
2. System validates input and checks for existing users
3. Password is hashed using bcrypt
4. User record is created with STUDENT role
5. Verification email is sent to user
6. User is redirected to login page with instructions to verify email

### Login

1. User submits login form with email and password
2. System validates credentials
3. If valid, JWT token is generated and session is created
4. User is redirected to dashboard based on role

### Password Reset

1. User requests password reset by providing email
2. System generates reset token and sends email with reset link
3. User clicks link and enters new password
4. System validates token and updates password
5. User is redirected to login page

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **Rate Limiting**: Failed login attempts are tracked and accounts are temporarily locked after multiple failures
- **CSRF Protection**: Built-in CSRF protection from NextAuth.js
- **JWT Tokens**: Secure JWT tokens for session management
- **Secure Cookies**: HTTP-only cookies for session storage
- **Email Verification**: Required email verification for new accounts
- **Password Strength Requirements**: Enforced password complexity rules

## API Endpoints

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `GET/POST /api/auth/[...nextauth]` - NextAuth.js endpoints
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `GET/POST /api/auth/verify-email` - Verify email address

### User Management Endpoints

- `GET /api/user/profile` - Get current user profile
- `PUT /api/user/profile` - Update user profile
- `PUT /api/user/password` - Change password

## Client Components

- `AuthProvider` - Context provider for authentication state
- `SessionProvider` - NextAuth session provider
- Login form component
- Registration form component
- Password reset form components
- Protected route components

## Usage Examples

### Protecting a Route

\`\`\`tsx
// In a page component
import { useAuth } from "@/components/providers/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedPage() {
  const { isAuthenticated, isLoading, user } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, isLoading, router])
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h1>Protected Content</h1>
      <p>Welcome, {user?.name}</p>
    </div>
  )
}
\`\`\`

### Role-Based Access Control

\`\`\`tsx
import { useAuth } from "@/components/providers/auth-provider"

export default function AdminFeature() {
  const { user } = useAuth()
  
  if (user?.role !== "ADMIN" && user?.role !== "SUPER_ADMIN") {
    return <div>Access denied</div>
  }
  
  return (
    <div>
      <h1>Admin Feature</h1>
      {/* Admin content */}
    </div>
  )
}
\`\`\`

## Test Accounts

For testing purposes, the following accounts are available:

1. **Admin Account**
   - Email: admin@mroncy.com
   - Password: admin123!

2. **Instructor Account**
   - Email: instructor@mroncy.com
   - Password: instructor123!

3. **Student Account**
   - Email: student@mroncy.com
   - Password: student123!

## Troubleshooting

### Common Issues

1. **"Invalid credentials" error**
   - Check that the email and password are correct
   - Ensure the account exists and is active

2. **"Email not verified" error**
   - Check if the user has clicked the verification link in their email
   - Resend verification email if needed

3. **Session expiration**
   - Default session duration is 30 days
   - Adjust SESSION_MAX_AGE environment variable if needed

### Debugging

For debugging authentication issues:

1. Check browser console for client-side errors
2. Check server logs for API errors
3. Verify environment variables are correctly set
4. Ensure database connection is working properly

## Security Recommendations

1. Regularly rotate JWT_SECRET and NEXTAUTH_SECRET
2. Implement two-factor authentication for admin accounts
3. Set up monitoring for failed login attempts
4. Regularly audit user accounts and permissions
5. Keep dependencies updated to patch security vulnerabilities

## Future Enhancements

1. Two-factor authentication
2. Social login with additional providers
3. Enhanced audit logging
4. Account activity notifications
5. IP-based access restrictions for admin accounts
