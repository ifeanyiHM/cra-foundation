import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // "./" resolves to each page's own URL, so every page gets its own canonical
  alternates: { canonical: "./" },
  title: {
    default: "Children's Right Advocate Foundation — To Nurture a Dream",
    template: "%s · CRA Foundation",
  },
  description:
    "The Children's Right Advocate Foundation nurtures underprivileged children in Lagos through education, nutrition, health care, and sponsorships since 2010.",
  keywords: [
    "children charity Lagos",
    "NGO Nigeria",
    "child sponsorship",
    "underprivileged children",
    "education Nigeria",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Children's Right Advocate Foundation",
    images: [
      {
        url: `${SITE_URL}/opengraph.jpg`,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/opengraph.jpg`],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph.jpg`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "40B Ayilara Street, Surulere",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
