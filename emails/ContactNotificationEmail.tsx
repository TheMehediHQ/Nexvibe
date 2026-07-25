import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
  Link,
} from "@react-email/components";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
}

function Field({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <Section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "14px 16px",
        marginBottom: "14px",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
          margin: 0,
          fontSize: "12px",
          color: "#6b7280",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 600,
        }}
      >
        {label}
      </Text>

      <Text
        style={{
          margin: "6px 0 0",
          fontSize: "16px",
          color: "#111827",
          lineHeight: "1.6",
        }}
      >
        {value}
      </Text>
    </Section>
  );
}

export default function ContactNotificationEmail({
  name,
  email,
  message,
  company,
  phone,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />

      <Body
        style={{
          margin: 0,
          padding: "32px 16px",
          backgroundColor: "#f5f7fb",
          color: "#111827",
          fontFamily:
            "Barlow, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,.05)",
          }}
        >
          {/* Header */}
          <Section
            style={{
              backgroundColor: "#0A84FF",
              padding: "32px",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              NexVibe Contact
            </Text>

            <Heading
              style={{
                margin: "10px 0 0",
                fontSize: "30px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              📩 New Contact Form Submission
            </Heading>

            <Text
              style={{
                margin: "12px 0 0",
                fontSize: "15px",
                color: "#E8F2FF",
                lineHeight: "1.7",
              }}
            >
              A new inquiry has been submitted through your website contact
              form.
            </Text>
          </Section>

          {/* Content */}
          <Section
            style={{
              padding: "32px",
            }}
          >
            <Text
              style={{
                margin: "0 0 18px",
                fontSize: "13px",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 700,
              }}
            >
              Contact Details
            </Text>

            <Field label="Full Name" value={name} />

            <Field
              label="Email Address"
              value={
                <Link
                  href={`mailto:${email}`}
                  style={{
                    color: "#0A84FF",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  {email}
                </Link>
              }
            />

            {company && (
              <Field label="Company / Organization" value={company} />
            )}

            {phone && (
              <Field
                label="Phone Number"
                value={
                  <Link
                    href={`tel:${phone}`}
                    style={{
                      color: "#0A84FF",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    {phone}
                  </Link>
                }
              />
            )}

            <Text
              style={{
                margin: "28px 0 12px",
                fontSize: "13px",
                color: "#6b7280",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 700,
              }}
            >
              Message
            </Text>

            <Section
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "18px",
              }}
            >
              <Text
                style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: "1.8",
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </Text>
            </Section>

            <Hr
              style={{
                border: 0,
                borderTop: "1px solid #e5e7eb",
                margin: "32px 0 24px",
              }}
            />

            {/* Quick Actions */}
            <Section
              style={{
                backgroundColor: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: "10px",
                padding: "18px",
                marginBottom: "24px",
              }}
            >
              <Text
                style={{
                  margin: "0 0 8px",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1E3A8A",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Quick Actions
              </Text>

              <Text
                style={{
                  margin: 0,
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "#1E3A8A",
                }}
              >
                📧 Reply directly to the sender using:{" "}
                <strong>{email}</strong>
                <br />
                {phone && (
                  <>
                    📞 Contact via phone: <strong>{phone}</strong>
                    <br />
                  </>
                )}
                {company && (
                  <>
                    🏢 Company: <strong>{company}</strong>
                  </>
                )}
              </Text>
            </Section>

            <Hr
              style={{
                border: 0,
                borderTop: "1px solid #e5e7eb",
                margin: "24px 0",
              }}
            />

            <Text
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#6b7280",
                lineHeight: "1.7",
                textAlign: "center",
              }}
            >
              This email was automatically generated from the{" "}
              <strong>NexVibe Contact Form</strong>.
              <br />
              You can reply directly to this email to continue the conversation
              with the sender.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}