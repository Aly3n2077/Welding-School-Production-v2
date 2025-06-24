// Environment validation utilities

export function validateFirebaseConfig(): {
  isValid: boolean
  missing: string[]
  configured: string[]
} {
  const requiredVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', 
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ]

  const missing = requiredVars.filter(varName => !process.env[varName])
  const configured = requiredVars.filter(varName => process.env[varName])
  
  return {
    isValid: missing.length === 0,
    missing,
    configured
  }
}

export function logEnvironmentStatus(): void {
  const { isValid, missing, configured } = validateFirebaseConfig()
  
  if (process.env.NODE_ENV === 'development') {
    console.log('🔧 Environment Configuration Status:')
    console.log(`✅ Configured variables: ${configured.length}/${configured.length + missing.length}`)
    
    if (missing.length > 0) {
      console.warn('⚠️  Missing Firebase variables:', missing)
      console.log('💡 Add these variables using the Secrets tool in Replit')
    } else {
      console.log('✅ All Firebase environment variables are configured')
    }
  }
}

// Check if we're in a server environment
export function isServerEnvironment(): boolean {
  return typeof window === 'undefined'
}

// Get environment configuration status
export function getEnvironmentStatus() {
  const firebase = validateFirebaseConfig()
  
  return {
    firebase,
    environment: process.env.NODE_ENV || 'development',
    server: isServerEnvironment()
  }
}
