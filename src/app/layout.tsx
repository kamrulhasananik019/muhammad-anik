import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammadanik.online"),

  title: {
    default: "Muhammad Anik | Full-Stack Web Developer",
    template: "%s | Muhammad Anik",
  },

  description:
    "Muhammad Anik is a Full-Stack Web Developer specializing in React, Next.js, MERN stack, and modern web technologies. Focused on performance, SEO, security, blockchain, and scalable web applications.",

  applicationName: "Muhammad Anik Portfolio",

  keywords: [
    "Muhammad Anik",
    "Full Stack Developer",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Blockchain Developer",
    "Network Engineer",
    "Cybersecurity",
    "Developer Portfolio",
  ],

  authors: [{ name: "Muhammad Anik", url: "https://www.muhammadanik.online" }],
  creator: "Muhammad Anik",
  publisher: "Muhammad Anik",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.muhammadanik.online",
  },

  openGraph: {
    title: "Muhammad Anik | Full-Stack Web Developer",
    description:
      "Official portfolio of Muhammad Anik, a Full-Stack Web Developer experienced in React, Next.js, MERN stack, Blockchain, and Networking.",
    url: "https://www.muhammadanik.online",
    siteName: "Muhammad Anik Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/a/ACg8ocKXUiv8eOGDSjJgyhJnCvJ0dHI-IOKMRcLJNWl8-sqTy2xm8gdn=s288-c-no",
        width: 288,
        height: 288,
        alt: "Muhammad Anik Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Anik | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer skilled in React, Next.js, MERN stack, Blockchain, and Networking.",
    images: [
      "https://lh3.googleusercontent.com/a/ACg8ocKXUiv8eOGDSjJgyhJnCvJ0dHI-IOKMRcLJNWl8-sqTy2xm8gdn=s288-c-no",
    ],
    creator: "@AnikKamrulhasan",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  themeColor: "#0f172a",
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}