import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";

interface CareerNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  position: string;
  coverLetter?: string;
  resumeFileName?: string;
}

export default function CareerNotificationEmail({
  name,
  email,
  phone,
  position,
  coverLetter,
  resumeFileName,
}: CareerNotificationEmailProps) {
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
            New Job Application
          </Heading>

          <Section style={{ marginBottom: "24px" }}>
            <Text
              style={{
                margin: 0,
                marginBottom: "8px",
                fontSize: "14px",
                color: "#9ca3af",
              }}
            >
              A new job application has been submitted through the careers form.
            </Text>
          </Section>

          <Hr
            style={{
              border: 0,
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "24px 0",
            }}
          />

          <Section>
            <Text
              style={{
                margin: 0,
                marginBottom: "16px",
                fontSize: "13px",
                color: "#9ca3af",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Application Details
            </Text>

            <Text
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              <strong>Name:</strong> {name}
            </Text>

            <Text
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              <strong>Email:</strong> {email}
            </Text>

            <Text
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              <strong>Phone:</strong> {phone}
            </Text>

            <Text
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "16px",
                color: "#ffffff",
              }}
            >
              <strong>Position:</strong> {position}
            </Text>

            {resumeFileName && (
              <Text
                style={{
                  margin: 0,
                  marginBottom: "12px",
                  fontSize: "16px",
                  color: "#ffffff",
                }}
              >
                <strong>Resume:</strong> {resumeFileName} (attached)
              </Text>
            )}

            {coverLetter && (
              <>
                <Text
                  style={{
                    margin: "16px 0 8px 0",
                    fontSize: "16px",
                    color: "#ffffff",
                  }}
                >
                  <strong>Cover Letter:</strong>
                </Text>
                <Text
                  style={{
                    margin: 0,
                    marginBottom: "12px",
                    fontSize: "16px",
                    color: "#ffffff",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {coverLetter}
                </Text>
              </>
            )}
          </Section>

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
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            This email was sent from the NexVibe careers application form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
