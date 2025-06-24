"use client"

import { useState } from "react"
import Image from "next/image"
import { getAvailablePaymentMethods } from "@/lib/payment-methods"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface PaymentMethodsProps {
  courseId: string
  courseTitle: string
  price: number
  onPaymentComplete?: (success: boolean, data?: any) => void
}

export function PaymentMethods({ courseId, courseTitle, price, onPaymentComplete }: PaymentMethodsProps) {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [paymentMessage, setPaymentMessage] = useState<string>("")
  const [transactionId, setTransactionId] = useState<string>("")
  const [showInstructions, setShowInstructions] = useState(false)

  const availablePaymentMethods = getAvailablePaymentMethods()

  const handlePaymentMethodChange = (value: string) => {
    setSelectedMethod(value)
    setShowInstructions(false)
    setPaymentStatus("idle")
    setPaymentMessage("")
  }

  const handleShowInstructions = () => {
    setShowInstructions(true)
  }

  const handleSubmitPayment = async () => {
    if (!selectedMethod) return

    setIsProcessing(true)
    setPaymentStatus("processing")

    try {
      // In a real application, this would communicate with a payment API
      // For now, we'll simulate a payment process
      const paymentData = {
        courseId,
        paymentMethod: selectedMethod,
        amount: price,
        transactionId: `TRX-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        status: "PENDING",
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setTransactionId(paymentData.transactionId)
      setPaymentStatus("success")
      setPaymentMessage(
        `Your payment is being processed. Please follow the instructions to complete your payment. Your transaction ID is ${paymentData.transactionId}.`,
      )

      if (onPaymentComplete) {
        onPaymentComplete(true, paymentData)
      }
    } catch (error) {
      console.error("Payment error:", error)
      setPaymentStatus("error")
      setPaymentMessage("There was an error processing your payment. Please try again or contact support.")

      if (onPaymentComplete) {
        onPaymentComplete(false)
      }
    } finally {
      setIsProcessing(false)
    }
  }

  const selectedPaymentMethod = availablePaymentMethods.find((method) => method.id === selectedMethod)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Select a payment method to enroll in {courseTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {paymentStatus === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
            <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
            <div>
              <p className="text-green-800">{paymentMessage}</p>
              <p className="text-green-700 font-medium mt-2">Transaction ID: {transactionId}</p>
            </div>
          </div>
        )}

        {paymentStatus === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
            <AlertCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
            <p className="text-red-800">{paymentMessage}</p>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-medium text-lg mb-2">Course Details</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Course:</span>
              <span className="font-medium">{courseTitle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Payment:</span>
              <span className="font-medium">${price.toFixed(2)} USD</span>
            </div>
          </div>
        </div>

        {showInstructions && selectedPaymentMethod ? (
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-2">Payment Instructions</h3>
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-3 overflow-hidden rounded-md">
                  <Image
                    src={selectedPaymentMethod.logo || "/placeholder.svg"}
                    alt={selectedPaymentMethod.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{selectedPaymentMethod.name}</h4>
                  <p className="text-sm text-gray-600">{selectedPaymentMethod.description}</p>
                </div>
              </div>
              <div className="whitespace-pre-line text-gray-700">
                {selectedPaymentMethod.instructions.replace(/\[AMOUNT\]/g, price.toFixed(2))}
              </div>
              <Button className="mt-4 w-full" onClick={handleSubmitPayment} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Confirm Payment"
                )}
              </Button>
            </div>
          </div>
        ) : (
          <RadioGroup value={selectedMethod || ""} onValueChange={handlePaymentMethodChange} className="space-y-3">
            {availablePaymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <RadioGroupItem value={method.id} id={method.id} />
                <div className="relative w-10 h-10 overflow-hidden rounded-md">
                  <Image src={method.logo || "/placeholder.svg"} alt={method.name} fill className="object-contain" />
                </div>
                <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                  <div className="font-medium">{method.name}</div>
                  <div className="text-sm text-gray-500">{method.description}</div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showInstructions && (
          <Button variant="outline" onClick={() => window.history.back()} className="mr-2">
            Cancel
          </Button>
        )}

        {selectedMethod && !showInstructions && <Button onClick={handleShowInstructions}>Continue</Button>}

        {showInstructions && (
          <Button variant="outline" onClick={() => setShowInstructions(false)}>
            Back to Payment Methods
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
