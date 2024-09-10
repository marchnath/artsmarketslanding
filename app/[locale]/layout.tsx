import { Arimo } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import React from "react";
import Footer from "./footer";
import initTranslations from "../i18n";
import { Suspense } from "react";
import { Metrika } from "./metrika";
import { LandingProvider } from "./context/context";

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

export default async function RootLayout({ children }: RootLayoutProps) {
  // const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <html lang="en">
      <LandingProvider>
        <body className={arimo.className}>
          <Suspense>
            <Metrika />
            {children}
            {/* <Footer /> */}
          </Suspense>
        </body>
      </LandingProvider>
    </html>
  );
}
