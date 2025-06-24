interface AdminNotificationEmailProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// FIX: Changed from named export to default export
export default function AdminNotificationEmail({ name, email, phone, subject, message }: AdminNotificationEmailProps) {
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
        <h1 style={{ color: "#36454F", fontSize: "24px", marginBottom: "10px" }}>New Contact Form Submission</h1>
        <div style={{ height: "4px", background: "#FF6600", width: "100px", margin: "0 auto" }}></div>
      </div>

      <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}>
        You have received a new message from the contact form on your website.
      </p>

      <div
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "5px",
          marginBottom: "30px",
          borderLeft: "4px solid #FF6600",
        }}
      >
        <h2 style={{ margin: "0 0 15px 0", color: "#36454F", fontSize: "18px" }}>Contact Details</h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd", width: "120px" }}>
                <strong>Name:</strong>
              </td>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>{name}</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                <strong>Email:</strong>
              </td>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                <a href={`mailto:${email}`} style={{ color: "#FF6600", textDecoration: "none" }}>
                  {email}
                </a>
              </td>
            </tr>
            {phone && (
              <tr>
                <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                  <strong>Phone:</strong>
                </td>
                <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                  <a href={`tel:${phone}`} style={{ color: "#FF6600", textDecoration: "none" }}>
                    {phone}
                  </a>
                </td>
              </tr>
            )}
            <tr>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>
                <strong>Subject:</strong>
              </td>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #ddd" }}>{subject}</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: "20px", marginBottom: "10px", color: "#36454F", fontSize: "16px" }}>Message:</h3>
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            whiteSpace: "pre-wrap",
            fontSize: "14px",
            lineHeight: "1.6",
          }}
        >
          {message}
        </div>
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#666",
          marginTop: "30px",
          padding: "15px",
          background: "#f9f9f9",
          borderRadius: "5px",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <strong>Timestamp:</strong> {new Date().toLocaleString()}
        </p>
        <p style={{ margin: "0" }}>
          This is an automated notification from your website contact form. You can reply directly to this email to
          respond to the sender.
        </p>
      </div>
    </div>
  )
}
