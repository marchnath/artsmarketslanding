import { Arimo } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import React from "react";
import Footer from "./footer";

const arimo = Arimo({
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "artsmrkt",
  description: "artsmrkt",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
