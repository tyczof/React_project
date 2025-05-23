import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormornat-gar",
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} antialiased`}
    >
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
