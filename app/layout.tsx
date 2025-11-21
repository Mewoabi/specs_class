import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Password to YouTube Automation | Masterclass by Formin Spectacular",
  description: "Unlock the secrets to making 6 figures on YouTube. Learn how to grow and monetize your YouTube channel without showing your face or using your voice. Join the masterclass with 15 modules, step-by-step course, and 2 months of mentorship.",
  keywords: "YouTube automation, faceless YouTube, YouTube monetization, YouTube course, YouTube masterclass, content creation, YouTube SEO, YouTube growth",
  authors: [{ name: "Atem Formin", url: "https://wa.me/237683406758" }],
  openGraph: {
    title: "Password to YouTube Automation | Masterclass by Formin Spectacular",
    description: "Unlock the secrets to making 6 figures on YouTube. Learn faceless YouTube automation and monetization strategies.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/PN5a3888.jpg",
        width: 1200,
        height: 630,
        alt: "Password to YouTube Automation - Masterclass by Atem Formin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password to YouTube Automation | Masterclass by Formin Spectacular",
    description: "Unlock the secrets to making 6 figures on YouTube. Learn faceless YouTube automation and monetization strategies.",
    images: ["/images/PN5a3888.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        {children}
      </body>
    </html>
  );
}
