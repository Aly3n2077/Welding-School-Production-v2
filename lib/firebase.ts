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
let db: Firestore | null = null

// Initialize Firebase only if configuration is available
export function initializeFirebase() {
  if (app) return { app, auth, db }

  try {
    const config = getFirebaseConfig()

    if (!config || !config.apiKey) {
      console.warn("Firebase configuration missing - running in demo mode")
      return { app: null, auth: null, db: null }
    }

    if (getApps().length === 0) {
      app = initializeApp(config)
    } else {
      app = getApps()[0]
    }
    auth = getAuth(app)
    //db = getFirestore(app)

    console.log("Firebase initialized successfully")
    return { app, auth, db }
  } catch (error) {
    console.error("Firebase initialization failed:", error)
    return { app: null, auth: null, db: null }
  }
}

// Initialize Firebase
const { app: firebaseApp, auth: firebaseAuth, db: firebaseDb } = initializeFirebase()

export { firebaseApp as app, firebaseAuth as auth, firebaseDb as db }

// Export a function to check Firebase status
export function getFirebaseStatus() {
  const config = getFirebaseConfig()
  return {
    configured: config !== null,
    app: Boolean(app),
    auth: Boolean(auth),
    db: Boolean(db)
  }
}
