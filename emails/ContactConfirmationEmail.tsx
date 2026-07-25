

import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Link,
  Section,
  Button,
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
          padding: "32px 16px",
          backgroundColor: "#f5f7fb",
          color: "#111111",
          fontFamily:
            "Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            padding: "40px",
            boxShadow: "0 8px 30px rgba(0,0,0,.05)",
          }}
        >
          {/* Logo */}
          <Text
            style={{
              margin: 0,
              marginBottom: "24px",
              fontSize: "24px",
              fontWeight: 700,
              color: "#0A84FF",
            }}
          >
            NexVibe
          </Text>

          {/* Heading */}
          <Heading
            style={{
              margin: 0,
              marginBottom: "20px",
              fontSize: "28px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.5px",
              lineHeight: "1.3",
            }}
          >
            We&apos;ve received your message 🎉
          </Heading>

          {/* Greeting */}
          <Text
            style={{
              margin: "0 0 16px",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            Dear <strong>{name}</strong>,
          </Text>

          {/* Intro */}
          <Text
            style={{
              margin: "0 0 16px",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            Thank you for contacting <strong>NexVibe</strong>. We&apos;ve
            successfully received your message and appreciate you taking the
            time to reach out.
          </Text>

          <Text
            style={{
              margin: "0 0 24px",
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            Our team is currently reviewing your inquiry. If we need any
            additional information, we&apos;ll contact you using this email address.
          </Text>

          {/* Highlight Box */}
          <Section
            style={{
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "28px",
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#1E3A8A",
              }}
            >
              ✓ Your inquiry has been received successfully.
              <br />
              ✓ We typically respond within{" "}
              <strong>24–48 business hours.</strong>
            </Text>
          </Section>

          {/* CTA Button */}
          <Button
            href="https://nexvibe.tech"
            style={{
              backgroundColor: "#0A84FF",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 600,
              display: "inline-block",
              marginBottom: "32px",
            }}
          >
            Visit Our Website
          </Button>

          <Hr
            style={{
              border: 0,
              borderTop: "1px solid #e5e7eb",
              margin: "0 0 32px",
            }}
          />

          {/* Signature */}
          <Text
            style={{
              margin: "0 0 8px",
              fontSize: "16px",
              color: "#374151",
            }}
          >
            Best regards,
          </Text>

          <Text
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 700,
              color: "#111111",
            }}
          >
            The NexVibe Team
          </Text>

          <Text
            style={{
              marginTop: "6px",
              marginBottom: "28px",
              fontSize: "14px",
              color: "#6B7280",
            }}
          >
            Helping Businesses Build, Grow &amp; Scale Online
          </Text>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <Text
              style={{
                margin: "0 0 12px",
                fontSize: "14px",
                color: "#111111",
                lineHeight: "1.8",
              }}
            >
              🌐{" "}
              <Link
                href="https://nexvibe.tech"
                style={{
                  color: "#0A84FF",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                nexvibe.tech
              </Link>
            </Text>

            <Text
              style={{
                margin: "0 0 12px",
                fontSize: "14px",
                color: "#111111",
                lineHeight: "1.8",
              }}
            >
              ✉️{" "}
              <Link
                href="mailto:hello@nexvibe.tech"
                style={{
                  color: "#0A84FF",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                hello@nexvibe.tech
              </Link>
            </Text>

            <Text
              style={{
                margin: "0 0 20px",
                fontSize: "14px",
                color: "#111111",
                lineHeight: "1.8",
              }}
            >
              💬{" "}
              <Link
                href="https://wa.me/8801607128338"
                style={{
                  color: "#0A84FF",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                +880 1607-128338
              </Link>
            </Text>

            <Hr
              style={{
                border: 0,
                borderTop: "1px solid #E5E7EB",
                margin: "20px 0",
              }}
            />

            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                color: "#6B7280",
                lineHeight: "1.7",
                textAlign: "center",
              }}
            >
              This is an automated confirmation email. Please do not reply to
              this message. If you need further assistance, feel free to contact
              us through our website or email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}