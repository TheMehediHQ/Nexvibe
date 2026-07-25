import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ConfirmationEmailProps {
  firstName: string;
}

export const ConfirmationEmail = ({ firstName }: ConfirmationEmailProps) => {
  const previewText = `We received your message, ${firstName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={logo}>NEXVIBE</Heading>
            <Text style={subTitle}>Message Confirmation</Text>
          </Section>

          <Section style={contentSection}>
            <Heading style={heading}>Hello {firstName},</Heading>
            <Text style={paragraph}>
              Thank you for reaching out to Nexvibe. We have successfully received your contact request.
            </Text>
            <Text style={paragraph}>
              Our team is already reviewing your details and will get back to you within 24 business hours to discuss how we can collaborate.
            </Text>
            <Text style={paragraph}>
              In the meantime, feel free to explore our website or check out our services:
            </Text>

            <Section style={buttonContainer}>
              <Link href="https://nexvibe.com/services" style={button}>
                Explore Services
              </Link>
            </Section>
          </Section>

          <Hr style={divider} />

          <Section style={footerSection}>
            <Text style={footerText}>
              This is an automated confirmation email. Please do not reply directly to this message.
            </Text>
            <Text style={footerText}>
              &copy; {new Date().getFullYear()} Nexvibe. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;

// Design styles mapping the Nexvibe brand
const main = {
  backgroundColor: "#0d0d0d",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#141414",
  border: "1px solid #262626",
  borderRadius: "16px",
  margin: "0 auto",
  padding: "30px",
  maxWidth: "580px",
};

const headerSection = {
  textAlign: "center" as const,
  marginBottom: "30px",
};

const logo = {
  color: "#4ba3f5",
  fontSize: "28px",
  fontWeight: "800",
  letterSpacing: "2px",
  margin: "0",
};

const subTitle = {
  color: "#a3a3a3",
  fontSize: "14px",
  margin: "4px 0 0 0",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const contentSection = {
  marginBottom: "24px",
};

const heading = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "16px",
};

const paragraph = {
  color: "#d4d4d4",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "24px",
  marginBottom: "24px",
};

const button = {
  backgroundColor: "#2461F5",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  border: "1px solid #4ba3f5",
};

const divider = {
  borderColor: "#262626",
  margin: "24px 0",
};

const footerSection = {
  textAlign: "center" as const,
};

const footerText = {
  color: "#737373",
  fontSize: "12px",
  margin: "4px 0",
};
