import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adamshawtattoo.com'),
  title: "Adam Shaw Tattoo",
  description: "Traditional and Japanese tattoo artist based in Winnipeg, MB. Custom work, flash, and walk-ins at Kapala Tattoo.",
  openGraph: {
    title: "Adam Shaw Tattoo",
    description: "Traditional and Japanese tattoo artist based in Winnipeg, MB. Custom work, flash, and walk-ins at Kapala Tattoo.",
  },
  twitter: {
    card: 'summary_large_image',
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
        className={`${geistSans.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
