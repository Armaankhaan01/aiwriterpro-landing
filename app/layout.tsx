import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai Writer Pro",
  description: "AI-powered writing assistant to enhance your writing experience",
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
        <Analytics />
        <Providers>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
