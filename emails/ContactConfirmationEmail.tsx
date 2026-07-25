import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface ContactConfirmationEmailProps {
  name: string;
}

export default function ContactConfirmationEmail({
  name,
}: ContactConfirmationEmailProps) {
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
            We{'\''}ve received your message
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
            Thank you for contacting us.
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
            We{'\''}ve successfully received your message.
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
            Our team will review it and get back to you within 24&ndash;48 hours.
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
            NexVibe Team
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
