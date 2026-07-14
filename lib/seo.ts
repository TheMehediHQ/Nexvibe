import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://nexvibe.tech";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const SITE_URL = (
  configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl
    : DEFAULT_SITE_URL
).replace(/\/+$/, "");
export const SITE_NAME = "Nexvibe";
export const DEFAULT_OG_IMAGE = "/profile/profile.png";
const ABSOLUTE_URL_PATTERN = /^https?:\/\//i;

const normalizePath = (routePath: string) =>
  routePath === "/" ? "/" : `/${routePath.replace(/^\/+/, "")}`;

export const absoluteUrl = (routePath: string) =>
  `${SITE_URL}${normalizePath(routePath)}`;

export const absoluteImageUrl = (imagePath: string) =>
  ABSOLUTE_URL_PATTERN.test(imagePath) ? imagePath : absoluteUrl(imagePath);

const resolveMetadataImage = (image?: string) => {
  const trimmedImage = image?.trim();
  if (!trimmedImage) {
    return absoluteImageUrl(DEFAULT_OG_IMAGE);
  }
  return absoluteImageUrl(trimmedImage);
};

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;
export const BING_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined;

export const getSiteVerificationMetadata = (): Metadata["verification"] => ({
  google: GOOGLE_SITE_VERIFICATION,
  other: BING_SITE_VERIFICATION
    ? { "msvalidate.01": BING_SITE_VERIFICATION }
    : undefined,
});

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export const createPageMetadata = ({
  path,
  title,
  description,
  keywords,
  image,
  noIndex = false,
}: PageMetadataInput): Metadata => {
  const canonicalPath = normalizePath(path);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const ogImageUrl = resolveMetadataImage(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
};
