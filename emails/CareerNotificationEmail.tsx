
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
} from "@react-email/components";

interface CareerNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  position: string;
  coverLetter?: string;
  resumeFileName?: string;
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
              NexVibe Careers
            </Text>

            <Heading
              style={{
                margin: "10px 0 0",
                fontSize: "30px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              📄 New Job Application
            </Heading>

            <Text
              style={{
                margin: "12px 0 0",
                fontSize: "15px",
                color: "#E8F2FF",
                lineHeight: "1.7",
              }}
            >
              A new candidate has submitted an application through your careers
              page.
            </Text>
          </Section>

          {/* Body */}
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
              Applicant Information
            </Text>

            <Field label="Full Name" value={name} />

            <Field label="Email Address" value={email} />

            <Field label="Phone Number" value={phone} />

            <Field
              label="Applied Position"
              value={
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "#EFF6FF",
                    color: "#0A84FF",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  {position}
                </span>
              }
            />

            <Field
              label="Resume"
              value={
                resumeFileName ? (
                  <>
                    📎 {resumeFileName}
                    <br />
                    <span
                      style={{
                        color: "#16a34a",
                        fontSize: "14px",
                      }}
                    >
                      Attached to this email
                    </span>
                  </>
                ) : (
                  <span style={{ color: "#9ca3af" }}>
                    No resume uploaded
                  </span>
                )
              }
            />

            {coverLetter && (
              <>
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
                  Cover Letter
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
                    {coverLetter}
                  </Text>
                </Section>
              </>
            )}

            <Hr
              style={{
                border: 0,
                borderTop: "1px solid #e5e7eb",
                margin: "32px 0 24px",
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
              <strong>NexVibe Careers Form</strong>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}