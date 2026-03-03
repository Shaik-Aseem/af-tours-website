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
  title: {
    default: "AF Tours & Travels | Kadapa",
    template: "%s | AF Tours & Travels",
  },
  description:
    "AF Tours & Travels is a trusted travel partner in Kadapa, India. Flight booking, visa assistance, Umrah packages, hotel booking, and travel insurance.",
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
  openGraph: {
    title: "AF Tours & Travels | Kadapa",
    description:
      "Trusted travel partner in Kadapa for flights, visa assistance, Umrah packages, hotels, and travel insurance.",
    type: "website",
    locale: "en_IN",
    siteName: "AF Tours & Travels",
  },
  twitter: {
    card: "summary_large_image",
    title: "AF Tours & Travels | Kadapa",
    description:
      "Trusted travel partner in Kadapa for flights, visa assistance, Umrah packages, hotels, and travel insurance.",
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
      </body>
    </html>
  );
}
