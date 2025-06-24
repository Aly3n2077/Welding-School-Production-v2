"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/providers/firebase-auth-provider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface ConfigStatus {
  configured: boolean
  ready: boolean
  error?: string
}

export function AuthStatus() {
  const { isConfigured, loading } = useAuth()
  const [configStatus, setConfigStatus] = useState<ConfigStatus | null>(null)

  useEffect(() => {
    // Check configuration status
    fetch('/api/auth/config')
      .then(res => res.json())
      .then(setConfigStatus)
      .catch(error => {
        console.error('Failed to check config:', error)
        setConfigStatus({ configured: false, ready: false, error: 'Check failed' })
      })
  }, [])

  if (loading || !configStatus) {
    return null
  }

  if (!isConfigured || !configStatus.configured) {
    return (
      <Alert className="mb-4 border-yellow-200 bg-yellow-50">
        <AlertDescription className="flex items-center justify-between">
          <span>
            🔧 Firebase authentication is not configured. 
            {process.env.NODE_ENV === 'development' && ' Set up environment variables to enable authentication.'}
          </span>
          {process.env.NODE_ENV === 'development' && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://docs.replit.com/programming-ide/storing-sensitive-information-environment-variables', '_blank')}
            >
              Setup Guide
            </Button>
          )}
        </AlertDescription>
      </Alert>
    )
  }

  return null
}
