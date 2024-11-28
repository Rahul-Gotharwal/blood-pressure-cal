import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

// Import custom components
import { SidebarProvider } from "@/components/ui/sidebar"; // If necessary
import MainComponent from "@/components/MainComponent"; // Main layout content

// Load custom fonts
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

// Metadata for the app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50">
          {/* Main content */}
          <MainComponent>{children}</MainComponent>

      </body>
    </html>
  );
}
