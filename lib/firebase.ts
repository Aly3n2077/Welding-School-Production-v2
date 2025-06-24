
import { initializeApp, getApps, FirebaseApp } from "firebase/app"
import { getAuth, Auth } from "firebase/auth"

// Firebase configuration interface
interface FirebaseConfig {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

// Get Firebase configuration from environment variables
function getFirebaseConfig(): FirebaseConfig | null {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }

  // Check if all required fields are present
  const missingFields = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key, _]) => key)

  if (missingFields.length > 0) {
    if (typeof window !== 'undefined') {
      console.warn('Firebase configuration incomplete. Missing:', missingFields)
    }
    return null
  }

  return config as FirebaseConfig
}

// Initialize Firebase app
let app: FirebaseApp | null = null
let auth: Auth | null = null

function initializeFirebase(): { app: FirebaseApp | null; auth: Auth | null } {
  try {
    const config = getFirebaseConfig()
    
    if (!config) {
      return { app: null, auth: null }
    }

    // Only initialize if not already initialized
    if (getApps().length === 0) {
      app = initializeApp(config)
    } else {
      app = getApps()[0]
    }

    auth = getAuth(app)
    return { app, auth }
  } catch (error) {
    if (typeof window !== 'undefined') {
      console.error('Failed to initialize Firebase:', error)
    }
    return { app: null, auth: null }
  }
}

// Initialize Firebase
const { app: firebaseApp, auth: firebaseAuth } = initializeFirebase()

// Export auth instance (may be null if configuration is missing)
export { firebaseAuth as auth }
export default firebaseApp

// Export configuration status for debugging
export function getFirebaseStatus() {
  const config = getFirebaseConfig()
  return {
    configured: config !== null,
    app: firebaseApp !== null,
    auth: firebaseAuth !== null
  }
}
