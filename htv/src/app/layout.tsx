import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const meditalic = localFont({
  src: "./fonts/Switzer-MediumItalic.otf",
  variable: "--font-switzer-meditalic",
  weight: "100 900",
});

const semibolditalic = localFont({
  src: "./fonts/Switzer-SemiboldItalic.otf",
  variable: "--font-switzer-semibolditalic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bit by Bit",
  description: "An online platform for getting rid of ewaste responsibly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: "white" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // className={`${meditalic.variable} ${semibolditalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
