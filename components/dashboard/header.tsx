"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, UserIcon, ChevronDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import type { User as FirebaseUser } from "firebase/auth"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  firebaseUser: FirebaseUser | null
}

export default function DashboardHeader({ firebaseUser }: DashboardHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const { signOut } = useFirebaseAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push("/")
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

  const userName = firebaseUser?.displayName
  const userEmail = firebaseUser?.email
  const userImage = firebaseUser?.photoURL

  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Student Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <DropdownMenu open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-2 font-medium text-sm">Notifications</div>
            <DropdownMenuSeparator />
            <div className="py-2 px-3 text-sm text-gray-500">
              <div className="mb-2 pb-2 border-b">
                <p className="font-medium text-gray-700">New course material available</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Your assignment was graded</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/notifications" className="w-full cursor-pointer">
                View all notifications
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {firebaseUser && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  {userImage ? (
                    <Image
                      src={userImage || "/placeholder.svg"}
                      alt={userName || userEmail || "User"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <UserIcon className="w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500" />
                  )}
                </div>
                <span className="hidden md:inline-block text-sm font-medium">{userName || userEmail}</span>
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile" className="cursor-pointer">
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="cursor-pointer">
                  Account Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
