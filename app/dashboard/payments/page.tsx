"use client"

import { useFirebaseAuth } from "@/components/providers/firebase-auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import FullPageLoader from "@/components/ui/full-page-loader"

// Placeholder data structure
const placeholderPayments = [
  { id: "1", course_title: "Welding Basics (Placeholder)", amount: 100, status: "COMPLETED", date: "2023-01-15" },
  { id: "2", course_title: "Advanced Techniques (Placeholder)", amount: 250, status: "PENDING", date: "2023-02-01" },
]

export default function PaymentsPage() {
  const { user, loading } = useFirebaseAuth()

  if (loading) {
    return <FullPageLoader message="Loading payment information..." />
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Please log in to view your payment history.</p>
      </div>
    )
  }

  // In a real application, fetch payment history for the user.uid from your backend
  const payments = placeholderPayments // Using placeholder data

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>
            View your past payments. For actual payment data, backend integration is required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {payments.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.course_title}</TableCell>
                    <TableCell>${payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p>No payment history found (using placeholder data).</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
