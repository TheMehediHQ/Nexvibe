import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface CareerConfirmationEmailProps {
  name: string;
}

export default function CareerConfirmationEmail({
  name,
}: CareerConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          margin: 0,
          padding: "24px",
          backgroundColor: "#0d0d0e",
          color: "#e5e7eb",
          fontFamily:
            "Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#141414",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "32px",
          }}
        >
          <Heading
            style={{
              margin: 0,
              marginBottom: "24px",
              fontSize: "24px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Application Received
          </Heading>

          <Text
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            Hello {name},
          </Text>

          <Text
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            Thank you for applying.
          </Text>

          <Text
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            We{'\''}ve successfully received your application.
          </Text>

          <Text
            style={{
              margin: 0,
              marginBottom: "16px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            Our recruitment team will review your application.
          </Text>

          <Text
            style={{
              margin: 0,
              marginBottom: "24px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            If your profile matches our requirements,
            <br />
            we{'\''}ll contact you regarding the next steps.
          </Text>

          <Hr
            style={{
              border: 0,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "24px 0",
            }}
          />

          <Text
            style={{
              margin: 0,
              marginBottom: "8px",
              fontSize: "16px",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            Best regards,
          </Text>

          <Text
            style={{
              margin: 0,
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Recruitment Team
          </Text>

          <Text
            style={{
              margin: "24px 0 0 0",
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            This is an automated message. Please do not reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
