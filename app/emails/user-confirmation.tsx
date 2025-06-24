import { config } from "@/app/config"

interface UserConfirmationEmailProps {
  name: string
  subject: string
}

// FIX: Changed from named export to default export
export default function UserConfirmationEmail({ name, subject }: UserConfirmationEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        color: "#36454F",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#36454F", fontSize: "24px", marginBottom: "10px" }}>
          Thank you for contacting us, {name}!
        </h1>
        <div style={{ height: "4px", background: "#FF6600", width: "100px", margin: "0 auto" }}></div>
      </div>

      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        We have received your message regarding "<strong>{subject}</strong>" and will get back to you as soon as
        possible.
      </p>

      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
        In the meantime, feel free to explore our courses and resources on our website at{" "}
        <a href={config.site.url} style={{ color: "#FF6600", textDecoration: "none" }}>
          {config.site.url}
        </a>
        .
      </p>

      <div
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "5px",
          marginTop: "30px",
          borderLeft: "4px solid #FF6600",
        }}
      >
        <p style={{ fontSize: "14px", color: "#666", margin: "0 0 10px 0" }}>
          <strong>Best regards,</strong>
        </p>
        <p style={{ fontSize: "14px", color: "#666", margin: "0 0 5px 0" }}>Daniel Muronzi Welding Training Centre</p>
        <p style={{ fontSize: "14px", color: "#666", margin: "0 0 5px 0" }}>978, Mugabe Heights, Borrowdale North</p>
        <p style={{ fontSize: "14px", color: "#666", margin: "0 0 5px 0" }}>52 Bradfield Rd, Harare, Zimbabwe</p>
        <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>+263 785 054 159</p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "12px", color: "#999" }}>
        <p>This is an automated message, please do not reply directly to this email.</p>
      </div>
    </div>
  )
}
