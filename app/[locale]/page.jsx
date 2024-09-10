"use client";
import { use, useEffect, useState } from "react";
import TradingStrategy from "@/app/[locale]/tradingStrategy";
import Trading from "@/app/[locale]/trading";
import Strategy from "./strategy";
import PromoSection from "./romoSection";
import AuthorSection from "./authorSection";
import WhyTradersLoseSection from "@/app/[locale]/whyTradersLoseSection";
import BookContentsSection from "./BookContentsSection";
import Header from "./header";
import initTranslations from "../i18n";
import TranslationsProvider from "../../components/TranslationProvider";
import ClientSideWrapper from "./clientSideWrapper";
import Footer from "./footer";
import { ToastContainer, toast } from "react-toastify";
import { LandingProvider } from "./context/context";
import "react-toastify/dist/ReactToastify.css";
import { useLandingContext } from "./context/context";

export default function Home({ params: { locale } }) {
  const [isYmLoaded, setIsYmLoaded] = useState(false);
  const { formSubmitted, setFormSubmitted, sectionID } = useLandingContext();
  const [translations, setTranslations] = useState({
    t: () => "",
    resources: {},
  });

  useEffect(() => {
    const checkYm = () => {
      if (typeof window.ym !== "undefined") {
        setIsYmLoaded(true);
      } else {
        setTimeout(checkYm, 100);
      }
    };
    checkYm();

    const loadTranslations = async () => {
      const { t, resources } = await initTranslations(locale, ["home"]);
      setTranslations({ t, resources });
    };
    loadTranslations();
  }, [locale]);

  // useEffect(() => {
  //   if (formSubmitted) {
  //     toast("Congratulations!", { autoClose: 5000 });
  //     setFormSubmitted(true);
  //   }
  //   console.log("formSubmitted", formSubmitted);
  // }, [formSubmitted]);

  useEffect(() => {
    if (sectionID) {
      console.log("sectionID", sectionID);
      const element = document.getElementById(sectionID);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [sectionID]);

  if (!isYmLoaded) {
    return <div>Loading...</div>;
  }

  const { resources } = translations;

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      {/* <LandingProvider> */}
      {/* <ToastContainer /> */}
      <ClientSideWrapper>
        <div dir={locale === "ar" ? "rtl" : "ltr"}>
          <Header locale={locale} />
          <main className="min-w-80">
            <TradingStrategy locale={locale} />
            <Strategy locale={locale} />
            <BookContentsSection locale={locale} />
            <WhyTradersLoseSection locale={locale} />
            <PromoSection locale={locale} />
            <AuthorSection locale={locale} />
            <Trading locale={locale} />
            <Footer locale={locale} />
          </main>
        </div>
      </ClientSideWrapper>
      {/* </LandingProvider> */}
    </TranslationsProvider>
  );
}
