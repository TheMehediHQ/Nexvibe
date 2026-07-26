export interface ContactInfo {
  email: string;
  phone: string;
  office: string;
}

export interface HeroContent {
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FormContent {
  heading: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  successDescription: string;
}

export interface ConsultationContent {
  heading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface ContactPageContent {
  hero: HeroContent;
  form: FormContent;
  contactInfo: ContactInfo;
  consultation: ConsultationContent;
}

export const CONTACT_CONTENT: ContactPageContent = {
  hero: {
    title: "Contact",
    titleHighlight: "Us",
    description:
      "Get in touch with our team to discuss how we can help transform your business. We're here to help.",
    ctaText: "Get In Touch Now",
    ctaHref: "/contact",
    imageSrc: "/icons/contact-hero.png",
    imageAlt: "Contact Icon",
  },
  form: {
    heading: "Send Us a Message",
    submitLabel: "Send",
    submittingLabel: "Sending...",
    successMessage: "Message sent successfully!",
    successDescription: "I'll get back to you within 24–48 hours.",
  },
  contactInfo: {
    email: "hello@nexvibe.tech",
    phone: "+880 1607-128338",
    office: "Remote Based\nBangladesh",
  },
  consultation: {
    heading: "Book a Consultation",
    description:
      "Want to discuss your project? Schedule a free consultation and let's talk about your ideas.",
    ctaText: "Book a Meeting",
    ctaHref: "https://cal.com/TheMehediHQ/15min",
  },
};
