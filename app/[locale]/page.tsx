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
import ClientSideWrapper from "./ClientSideWrapper";
import LanguageChanger from "../../components/LanguageChanger";
import Footer from "./footer";

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <ClientSideWrapper>
        <div dir={locale === "ar" ? "rtl" : "ltr"}>
          <Header locale={locale} />
          {/* {locale === "ar" && (
            <p dir="rtl" className="mr-10">
              hello
            </p>
          )} */}
          {/* <div>{t("Authors")}</div> */}
          {/* <LanguageChanger /> */}
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
    </TranslationsProvider>
  );
}
