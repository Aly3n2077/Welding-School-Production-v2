"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"

interface PaymentPageProps {
  params: {
    slug: string
  }
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState("ecocash")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Mock course data - in a real app, fetch this from your API
  const course = {
    id: "course-1",
    slug: params.slug,
    title: "SMAW Welding Certification",
    price: 299.99,
    image: "/images/courses/smaw-welding.jpeg",
	monthlyPrice: 29.99,
  }

  const handlePayment = async () => {
    if (!session) {
      // Redirect to login with return URL
      router.push(`/auth/login?callbackUrl=/courses/${params.slug}/payment`)
      return
    }

    setIsProcessing(true)
    setError(null)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real app, you would call your payment API here
      // const response = await fetch('/api/payments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     courseId: course.id,
      //     paymentMethod: selectedMethod,
      //     amount: course.price
      //   })
      // })

      // if (!response.ok) throw new Error('Payment failed')

      setIsComplete(true)

      // Redirect to success page after 2 seconds
      setTimeout(() => {
        router.push(`/dashboard?enrolled=${course.slug}`)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment processing failed")
    } finally {
      setIsProcessing(false)
    }
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-welding-orange" />
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-steel-blue mb-6">Complete Your Enrollment</h1>

        {!session && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              You need to create an account or log in to complete your enrollment.
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href={`/auth/login?callbackUrl=/courses/${params.slug}/payment`}
                  className="text-welding-orange hover:underline"
                >
                  Log in
                </Link>
                <span>or</span>
                <Link
                  href={`/auth/register?callbackUrl=/courses/${params.slug}/payment`}
                  className="text-welding-orange hover:underline"
                >
                  Create an account
                </Link>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="ecocash" value={selectedMethod} onValueChange={setSelectedMethod}>
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="ecocash">EcoCash</TabsTrigger>
                    <TabsTrigger value="mukuru">Mukuru</TabsTrigger>
                    <TabsTrigger value="innbucks">InnBucks</TabsTrigger>
                  </TabsList>

                  <TabsContent value="ecocash" className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/payment/ecocash-logo.png"
                        alt="EcoCash"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Pay with EcoCash:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Dial *151# on your phone</li>
                        <li>Select "Send Money"</li>
                        <li>Enter merchant code: 123456</li>
                        <li>Enter amount: ${course.monthlyPrice.toFixed(2)}</li>
                        <li>Enter your PIN</li>
                        <li>Confirm payment</li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="mukuru" className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/payment/mukuru-logo.png"
                        alt="Mukuru"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Pay with Mukuru:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Open your Mukuru app</li>
                        <li>Select "Pay"</li>
                        <li>Enter business ID: MRONCY2023</li>
                        <li>Enter amount: ${course.monthlyPrice.toFixed(2)}</li>
                        <li>Confirm payment details</li>
                        <li>Complete transaction</li>
                      </ol>
                    </div>
                  </TabsContent>

                  <TabsContent value="innbucks" className="space-y-4">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/payment/innbucks-logo.png"
                        alt="InnBucks"
                        width={120}
                        height={120}
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Pay with InnBucks:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Log in to your InnBucks account</li>
                        <li>Select "Transfer"</li>
                        <li>Enter recipient: MRONCY</li>
                        <li>Enter amount: ${course.monthlyPrice.toFixed(2)}</li>
                        <li>Add reference: {course.slug}</li>
                        <li>Confirm and send payment</li>
                      </ol>
                    </div>
                  </TabsContent>
                </Tabs>

                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {isComplete && (
                  <Alert className="mt-4 bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-green-700">
                      Payment successful! You are now enrolled in this course. Redirecting to your dashboard...
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter>
                <Button onClick={handlePayment} disabled={isProcessing || isComplete || !session} className="w-full">
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : isComplete ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Enrolled Successfully
                    </>
                  ) : (
                    `Complete Payment ($${course.monthlyPrice.toFixed(2)})`
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">{course.title}</h3>
                  <p className="text-sm text-gray-500">Full course access</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span>${course.monthlyPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2 text-lg">
                    <span>Total</span>
                    <span>${course.monthlyPrice.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                By completing this purchase, you agree to our{" "}
                <Link href="/terms-of-service" className="text-welding-orange hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-welding-orange hover:underline">
                  Privacy Policy
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
