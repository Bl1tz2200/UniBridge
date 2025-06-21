import type { Metadata } from "next";
import { Rubik, Inter } from "next/font/google";
import { NavBar } from "@/components/navbar";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unibridge",
  description: "Platform for applicants where they can find structured information about admission to different countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.variable} ${inter.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
