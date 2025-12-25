import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { ValueProvider } from "@/components/ValueContext";

export const metadata: Metadata = {
  title: {
    default: "Dreptec | AI powred solutions",
    template: "%s | Dreptec" // Adds this suffix to child pages automatically
  },
  description: "Official portal for Dreptec. providing IT solutions from websites to AI advanced apps",
  keywords: ["Dreptec", "AI", "Chat gpt", "Generitive ai", "Smart chat"],
  authors: [{ name: "Dreptec IT" }],
  openGraph: {
    title: "Dreptec Portal",
    description: "Official portal for Dreptec. providing IT solutions.",
    url: "https://www.dreptec.com",
    siteName: "Ministry of Interior",
    images: [
      {
        url: "https://www.dreptec.com/logo_h.png", // Create a 1200x630px image for social sharing
        width: 423,
        height: 540,
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  verification: {
    other: {
      "facebook-domain-verification": "4z2ozdwbnyfnc483e4n429ghthm3xe",
    },
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <ValueProvider>
          <Header/>
          {children}
          <Footer/>
        </ValueProvider>
      </body>
    </html>
  );
}
