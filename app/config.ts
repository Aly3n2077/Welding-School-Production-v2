// Environment variables with fallbacks for development
export const config = {
  // reCAPTCHA configuration (only secret key, site key is handled via API route)
  recaptcha: {
    secretKey: process.env.RECAPTCHA_SECRET_KEY || "",
  },
  // Email configuration
  email: {
    from: process.env.EMAIL_FROM || "noreply@admin.mroncy.com",
    adminEmail: process.env.ADMIN_EMAIL || "admin@admin.mroncy.com",
    resendApiKey: process.env.RESEND_API_KEY || "",
    domainName: "admin.mroncy.com",
  },
  // Site configuration
  site: {
    name: "Daniel Muronzi Welding Training Centre",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://meronzi-welding-centre.vercel.app",
  },
}
