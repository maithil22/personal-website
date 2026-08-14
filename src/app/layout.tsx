import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/sections/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Maithil Mehta — CS Portfolio",
  description:
    "Masters in CS student specializing in Systems, AI/ML, and Full-Stack engineering.",
  openGraph: {
    title: "Maithil Mehta — CS Portfolio",
    description:
      "Masters in CS student specializing in Systems, AI/ML, and Full-Stack engineering.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
