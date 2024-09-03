import { Work_Sans } from "next/font/google";
import { ReactNode } from 'react';
import "./globals.css";
import React from "react";
import Header from "@/app/header";
import Footer from "@/app/footer";

const work_sans = Work_Sans({
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
      <body className={work_sans.className}>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}
