import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"
import type React from "react"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas's Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#1A2F1A] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
