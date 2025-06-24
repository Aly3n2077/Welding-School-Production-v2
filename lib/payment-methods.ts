export interface PaymentMethod {
  id: string
  name: string
  description: string
  logo: string
  instructions: string
  enabled: boolean
}

// Available payment methods
const paymentMethods: PaymentMethod[] = [
  {
    id: "MUKURU",
    name: "Mukuru",
    description: "Send money to Zimbabwe with Mukuru",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mukuru-Logo-Pack-Orange.png-PXKEdDAG2bECvJ1HBvm4sOzlBftuR7.webp",
    instructions: `To pay with Mukuru:
1. Send money to account number: 12345678
2. Use your full name and course ID as reference
3. Enter the transaction reference number below
4. We'll verify your payment within 24 hours`,
    enabled: true,
  },
  {
    id: "ECOCASH",
    name: "EcoCash",
    description: "Mobile money payments",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoCash-Android-App-4U75n5P6qdOLG12BxMXMD79f0w3Teu.png",
    instructions: `To pay with EcoCash:
1. Dial *151# on your phone
2. Select "Send Money"
3. Enter merchant code: 123456
4. Enter the amount: $${0} USD
5. Enter your PIN
6. Enter the confirmation code below`,
    enabled: true,
  },
  {
    id: "INNBUCKS",
    name: "InnBucks",
    description: "MicroBank mobile wallet",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/log1-XTgZ1INhpW0hgH1x7Q3S1jIyauOQ1M.png",
    instructions: `To pay with InnBucks:
1. Open your InnBucks app
2. Select "Pay Merchant"
3. Enter merchant ID: MRONCY
4. Enter the amount and confirm
5. Enter the transaction reference number below`,
    enabled: true,
  },
  {
    id: "CASH",
    name: "Cash Payment",
    description: "Pay in person at our campus",
    logo: "/placeholder.svg?height=60&width=60",
    instructions: `To pay with cash:
1. Visit our campus at: 123 Main Street, Harare
2. Bring the exact amount: $${0} USD
3. Our office hours are Monday-Friday, 9AM-5PM
4. You'll receive a receipt which you should keep safe
5. Enter the receipt number below`,
    enabled: true,
  },
  {
    id: "BANK_TRANSFER",
    name: "Bank Transfer",
    description: "Direct bank transfer to our account",
    logo: "/placeholder.svg?height=60&width=60",
    instructions: `To pay via bank transfer:
1. Transfer $${0} USD to:
   Bank: First Bank of Zimbabwe
   Account Name: MRONCY Welding School
   Account Number: 123456789
   Branch Code: 12345
2. Use your full name and course ID as reference
3. Enter the transfer reference number below`,
    enabled: true,
  },
]

export const getAvailablePaymentMethods = (): PaymentMethod[] => {
  return paymentMethods.filter((method) => method.enabled)
}

export const getPaymentMethodById = (id: string): PaymentMethod | undefined => {
  return paymentMethods.find((method) => method.id === id)
}
