import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://matchmyskills.dev";
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "Match Your Skills | CV Automation Concierge",
  description:
    "Hand off your CV once. Our automation finds matching roles, tunes your profile, and sends personalized submissions straight to your inbox.",
  openGraph: {
    title: "Match Your Skills | CV Automation Concierge",
    description:
      "Hand off your CV once. Our automation finds matching roles, tunes your profile, and sends personalized submissions straight to your inbox.",
    url: baseUrl,
    siteName: "Match Your Skills",
    images: [
      {
        url: `${baseUrl}/images/matchyourskills_logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Match Your Skills Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Match Your Skills | CV Automation Concierge",
    description:
      "Hand off your CV once. Our automation finds matching roles, tunes your profile, and sends personalized submissions straight to your inbox.",
    images: [`${baseUrl}/images/matchyourskills_logo.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-slate-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
