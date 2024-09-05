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

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ["home"]);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home"]}
    >
      <ClientSideWrapper>
        <div>
          <Header />
          <div>{t("Authors")}</div>
          <LanguageChanger />
          <main className="min-w-80">
            <TradingStrategy />
            <Strategy />
            <BookContentsSection />
            <WhyTradersLoseSection />
            <PromoSection />
            <AuthorSection />
            <Trading />
          </main>
        </div>
      </ClientSideWrapper>
    </TranslationsProvider>
  );
}
