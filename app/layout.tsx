import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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
  title: {
    default: "AF Tours & Travels | Trusted Travel Partner in Kadapa",
    template: "%s | AF Tours & Travels",
  },
  description:
    "AF Tours & Travels in Kadapa provides UAE Tourist Visa, Kuwait Visa Stamping, GAMCA Medical Appointment, Flight Booking and complete travel support.",
  applicationName: "AF Tours & Travels",
  keywords: [
    "AF Tours & Travels",
    "Kadapa",
    "Travel agency Kadapa",
    "Flight booking",
    "Visa assistance",
    "Umrah packages",
    "Hotel booking",
    "Travel insurance",
  ],
  authors: [{ name: "AF Tours & Travels" }],
  creator: "AF Tours & Travels",
  category: "Travel",
  robots: { index: true, follow: true },
  verification: {
    google: "lwBvWFGnyG3JsZ4Nqaa7Xefl9oPzB_FUns-nTK_yPLI",
  },
  openGraph: {
    title: "AF Tours & Travels | Trusted Travel Partner in Kadapa",
    description:
      "AF Tours & Travels in Kadapa provides UAE Tourist Visa, Kuwait Visa Stamping, GAMCA Medical Appointment, Flight Booking and complete travel support.",
    type: "website",
    locale: "en_IN",
    siteName: "AF Tours & Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "AF Tours & Travels | Trusted Travel Partner in Kadapa",
    description:
      "AF Tours & Travels in Kadapa provides UAE Tourist Visa, Kuwait Visa Stamping, GAMCA Medical Appointment, Flight Booking and complete travel support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0b1f3a] text-white antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
