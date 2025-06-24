import { PageWrapper } from "@/components/ui/page-wrapper"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TestAccountsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-welding-orange hover:text-welding-orange/80 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900">Test Accounts</h1>
              <p className="mt-2 text-gray-600">
                Use these accounts to test the functionality of the Mroncy School of Welding and Fabrication Engineering
                website.
              </p>
            </div>

            <div className="px-6 py-8">
              <div className="space-y-8">
                {/* Admin Account */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Administrator Account</h2>
                    <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                      ADMIN
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Email:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">admin@mroncy.com</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Password:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">admin123!</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Capabilities:</div>
                      <div className="col-span-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Access to admin dashboard</li>
                          <li>Manage users and courses</li>
                          <li>View all student records</li>
                          <li>Process payments</li>
                          <li>Generate reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                    >
                      Login as Admin
                    </Link>
                  </div>
                </div>

                {/* Instructor Account */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Instructor Account</h2>
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      INSTRUCTOR
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Email:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">instructor@mroncy.com</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Password:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">instructor123!</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Capabilities:</div>
                      <div className="col-span-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Access to instructor dashboard</li>
                          <li>Manage assigned courses</li>
                          <li>Grade student assignments</li>
                          <li>Create course materials</li>
                          <li>Communicate with students</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Login as Instructor
                    </Link>
                  </div>
                </div>

                {/* Student Account */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Student Account</h2>
                    <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      STUDENT
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Email:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">student@mroncy.com</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Password:</div>
                      <div className="col-span-2 text-sm font-mono bg-gray-100 p-2 rounded">student123!</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-sm font-medium text-gray-500">Capabilities:</div>
                      <div className="col-span-2 text-sm">
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Access to student dashboard</li>
                          <li>View enrolled courses</li>
                          <li>Submit assignments</li>
                          <li>Track progress</li>
                          <li>Make payments</li>
                          <li>Download certificates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Login as Student
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900">Important Notes:</h3>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>These accounts are for demonstration purposes only.</li>
                  <li>All data associated with these accounts is reset periodically.</li>
                  <li>Do not use these accounts for storing any important information.</li>
                  <li>For security reasons, these accounts have limited functionality in production.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need a real account?{" "}
              <Link href="/auth/register" className="text-welding-orange hover:text-welding-orange/80 font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
