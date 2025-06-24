"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpenText, CheckCircle, Clock } from "lucide-react"
// Note: Charting libraries would be dynamically imported in a real app
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Placeholder data
const placeholderStats = {
  enrolledCourses: 2,
  completedCourses: 0,
  hoursLearned: 10,
}

// const placeholderChartData = [
//   { name: 'Jan', hours: 4 },
//   { name: 'Feb', hours: 3 },
//   { name: 'Mar', hours: 5 },
//   { name: 'Apr', hours: 2 },
// ];

export default function DashboardOverview() {
  // In a real app, fetch this data based on the authenticated user
  const stats = placeholderStats
  // const chartData = placeholderChartData;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpenText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.enrolledCourses}</div>
            <p className="text-xs text-muted-foreground">(Placeholder Data)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedCourses}</div>
            <p className="text-xs text-muted-foreground">(Placeholder Data)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.hoursLearned}</div>
            <p className="text-xs text-muted-foreground">(Placeholder Data)</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Activity (Placeholder)</CardTitle>
          <CardDescription>Chart showing learning hours. Requires backend data and charting library.</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
          <p className="text-muted-foreground">Chart Data Unavailable</p>
          {/* 
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          */}
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground text-center">
        Note: All data displayed on this overview is placeholder data. Real-time statistics require backend integration.
      </p>
    </div>
  )
}
