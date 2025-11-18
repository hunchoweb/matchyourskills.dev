import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Match Your Skills | CV Automation Concierge",
  description:
    "Hand off your CV once. Our automation finds matching roles, tunes your profile, and sends personalized submissions straight to your inbox.",
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
      </body>
    </html>
  );
}
