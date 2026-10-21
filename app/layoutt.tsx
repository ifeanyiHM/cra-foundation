import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
        <Header />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
