import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phoneNumber?: string;
  message: string;
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  company,
  phoneNumber,
  message,
}: ContactEmailProps) => {
  const previewText = `New contact message from ${firstName} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Heading style={logo}>NEXVIBE</Heading>
            <Text style={subTitle}>New Inbound Contact Request</Text>
          </Section>

          <Section style={contentSection}>
            <Heading style={heading}>Message Details</Heading>
            
            <Text style={label}>Name</Text>
            <Text style={value}>{firstName} {lastName}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>

            {company && (
              <>
                <Text style={label}>Company</Text>
                <Text style={value}>{company}</Text>
              </>
            )}

            {phoneNumber && (
              <>
                <Text style={label}>Phone Number</Text>
                <Text style={value}>{phoneNumber}</Text>
              </>
            )}

            <Hr style={divider} />

            <Text style={label}>Message</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={divider} />

          <Section style={footerSection}>
            <Text style={footerText}>
              This email was automatically generated and sent via Nexvibe Contact Page integration.
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

export default ContactEmail;

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
  marginBottom: "20px",
};

const label = {
  color: "#737373",
  fontSize: "12px",
  fontWeight: "500",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "12px 0 2px 0",
};

const value = {
  color: "#e5e5e5",
  fontSize: "16px",
  margin: "0 0 12px 0",
};

const messageBox = {
  color: "#e5e5e5",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "8px 0 0 0",
  backgroundColor: "#1c1c1c",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #262626",
  whiteSpace: "pre-wrap" as const,
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
