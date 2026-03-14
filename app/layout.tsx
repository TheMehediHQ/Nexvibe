import type { Metadata } from "next";
import "./globals.css";
// import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import InfiniteMarquee from "./components/InfiniteMarquee";
import { SITE_URL, getSiteVerificationMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nova 01 Labs | Web Agency",
  description:
    "Nova 01 Labs is a web agency building high-converting websites, modern web apps, and growth-focused digital experiences.",
  keywords: [
    "Nova 01 Labs",
    "Web Agency",
    "Agency Portfolio",
    "Next.js Agency",
    "Website Design Agency",
    "Web Development Agency",
    "Conversion-focused websites",
    "React development agency",
    "SEO-friendly websites",
    "UI UX and Web Design",
  ],
  authors: [{ name: "Nova 01 Labs" }],
  openGraph: {
    title: "Nova 01 Labs | Web Agency",
    description:
      "Agency portfolio of Nova 01 Labs featuring web design, development, and performance-focused delivery.",
    url: SITE_URL,
    siteName: "Nova 01 Labs",
    images: [
      {
        url: "/profile/profile.png",
        width: 1200,
        height: 630,
        alt: "Nova 01 Labs",
      },
    ],
    locale: "en_US",
    alternateLocale: ["en_BD"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova 01 Labs | Web Agency",
    description: "Web design and development agency portfolio.",
    images: ["/profile/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: getSiteVerificationMetadata(),
  icons: {
    icon: "/favicon.ico",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova 01 Labs",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/mehedi-hasan1102",
    "https://github.com/mehedi-hasan1102",
  ],
  description:
    "Nova 01 Labs builds conversion-focused websites and modern web applications for startups and growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d;if(t==='light'){d=false;}else if(t==='dark'){d=true;}else{d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;}if(d){document.documentElement.classList.remove('light-mode');}else{document.documentElement.classList.add('light-mode');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {/* <ThemeToggle /> */}
        {children}
        <Contact />
        <InfiniteMarquee />
      </body>
    </html>
  );
}
