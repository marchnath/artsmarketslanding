"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import i18nConfig from "@/i18nConfig";

const Header = ({ locale }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(false);
  const [activeLanguageMobile, setActiveLanguageMobile] = useState(false);

  const { t } = useTranslation();
  const handleActiveLanguage = () => {
    setActiveLanguage(!activeLanguage);
  };
  const handleActiveLanguageMobile = () => {
    setActiveLanguageMobile(!activeLanguageMobile);
  };
  const handleClickBurger = () => {
    if (window.innerWidth < 640) {
      setActiveMenu(!activeMenu);
    }
  };

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <header className="min-w-80 relatove">
      {activeMenu && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-customGreySeven w-full h-full opacity-40"></div>
      )}
      <div className="mx-auto flex max-h-[83px] max-w-[1240px] flex-row items-center justify-between py-6 bg-white max-sm:max-h-[66.5px] max-sm:px-4 max-sm:py-4 max-sm:relative max-sm:z-50">
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="box-shadow-logo flex h-[35px] w-[35px] items-center justify-center rounded-lg border-[0.5px] border-solid border-customGreyOne bg-customWhiteOne"
          >
            <Image
              src="logo.svg"
              alt="artsmkts company logo"
              width={25}
              height={17}
              className="max-h-full max-w-full object-contain"
            />
          </Link>

          <div
            onClick={handleActiveLanguage}
            className="relative flex flex-row items-center gap-3 px-4 text-customBlackFour py-2 max-sm:hidden cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour"
          >
            <div className="flex flex-row items-center">
              <div className="mr-1 px-1">
                <Image
                  src="earth.svg"
                  alt="planet earth"
                  width={16}
                  height={16}
                  className="h-4 w-4 object-contain"
                />
              </div>
              <span className="text-[16px] leading-[19.2px]">{t("EN")}</span>
            </div>
            <div className="flex h-2.5 w-2.5 items-center justify-center">
              <Image
                src="arrow.svg"
                alt="arrow"
                width={7}
                height={4}
                className={`object-contain transform transition-transform duration-300 ${
                  activeLanguage ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {activeLanguage && (
              <div className="flex flex-col absolute top-10 -right-10 shadow-md mr-1 px-1 gap-2 py-3 rounded-2xl w-max z-50">
                <div className="px-4 flex flex-row justify-between gap-2 cursor-pointer  active:text-customRedText active:bg-transparent">
                  <div
                    className="flex flex-row items-center gap-2"
                    onClick={() => handleChange("en")}
                  >
                    <Image
                      src="/english.svg"
                      alt="english"
                      width={15}
                      height={15}
                      className="object-contain"
                    />
                    <p className="text-[16px] leading-[19.2px]">English</p>
                  </div>
                  {!locale && (
                    <Image
                      src="/arrow8.svg"
                      alt="arrow"
                      width={10}
                      height={10}
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="px-4 flex flex-row justify-between gap-2 cursor-pointer active:text-customRedText active:bg-transparent">
                  <div
                    className="flex flex-row gap-2"
                    onClick={() => handleChange("ar")}
                  >
                    <Image
                      src="/ar.svg"
                      alt="ar"
                      width={15}
                      height={15}
                      className="object-contain"
                    />
                    <p className="text-[16px] leading-[19.2px] cursor-pointer ">
                      عربي
                    </p>
                  </div>
                  {locale === "ar" && (
                    <Image
                      src="/arrow8.svg"
                      alt="arrow"
                      width={10}
                      height={10}
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-row max-sm:${
            activeMenu ? "flex " : "hidden"
          } max-sm:absolute max-sm:min-w-80 max-sm:flex-col max-sm:top-[67px] max-sm:left-0 max-sm:p-4 max-sm:bg-customGreyFour max-sm:w-full max-sm:z-30`}
        >
          <button
            type="button"
            onClick={handleClickBurger}
            className="hidden items-center justify-center h-[35px] w-[35px] rounded-[44px] ml-auto border-[1px] border-solid border-customGrey max-sm:flex hover:bg-customGreyTwo active:bg-customGrey"
          >
            <Image src="/close.svg" alt="close" width={8} height={8} />
          </button>
          <Link
            href="#tradingStrategy"
            name="tradingStrategy"
            onClick={handleClickBurger}
            className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour max-sm:p-2.5 max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-4 max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:rounded-none max-sm:active:text-customRedText max-sm:active:bg-transparent"
          >
            {t("Trading strategy")}
          </Link>
          <Link
            href="#strategy"
            name="strategy"
            onClick={handleClickBurger}
            className="text-[16px] leading-[19.2px] py-2 px-4  cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour max-sm:p-2.5 max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-4 max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:rounded-none max-sm:active:text-customRedText max-sm:active:bg-transparent"
          >
            {t("Who needs the strategy")}
          </Link>
          <Link
            href="#book"
            name="book"
            onClick={handleClickBurger}
            className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour max-sm:p-2.5 max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-4 max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:rounded-none max-sm:active:text-customRedText max-sm:active:bg-transparent"
          >
            {t("Book")}
          </Link>
          <Link
            href="#reasonsFailure"
            name="reasonsFailure"
            onClick={handleClickBurger}
            className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour max-sm:p-2.5 max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-4 max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:rounded-none max-sm:active:text-customRedText max-sm:active:bg-transparent"
          >
            {t("Reasons of failure")}
          </Link>
          <Link
            href="#authors"
            name="authors"
            onClick={handleClickBurger}
            className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour max-sm:p-2.5 max-sm:text-[20px] max-sm:leading-[24px] max-sm:mb-4 max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:rounded-none max-sm:active:text-customRedText max-sm:active:bg-transparent"
          >
            {t("Authors")}
          </Link>
          <div
            className="hidden  flex-row items-center gap-3 p-2.5 max-sm:flex max-sm:w-full border-b-[1px] border-customGrey border-solid"
            onClick={handleActiveLanguageMobile}
          >
            <p className="cursor-pointer hover:text-customRedText  active:text-customRedText text-[20px] leading-[24px]">
              {t("Language")}
            </p>
            <div className="flex h-2.5 w-2.5 items-center justify-center">
              <Image
                src="arrow.svg"
                alt="arrow"
                width={10}
                height={10}
                className={`object-contain transform transition-transform duration-300 ${
                  activeLanguageMobile ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
          {activeLanguageMobile && (
            <>
              <div className="py-2.5 pl-11 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                <div
                  className="flex flex-row gap-2"
                  onClick={() => handleChange("en")}
                >
                  <Image
                    src="/english.svg"
                    alt="english"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  <p className="text-[16px] leading-[19.2px] cursor-pointer  active:text-customRedText active:bg-transparent">
                    English
                  </p>
                </div>
              </div>
              <div className="py-2.5 pl-11 pr-4 border-b-[1px] border-customGrey border-solid flex flex-row justify-between">
                <div
                  className="flex flex-row gap-2"
                  onClick={() => handleChange("ar")}
                >
                  <Image
                    src="/ar.svg"
                    alt="ar"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  <p className="text-[16px] leading-[19.2px] cursor-pointer  active:text-customRedText active:bg-transparent">
                    عربي
                  </p>
                </div>
                {locale === "ar" && (
                  <Image
                    src="/arrow8.svg"
                    alt="arrow"
                    width={12}
                    height={10}
                    className="object-contain"
                  />
                )}
              </div>
            </>
          )}
        </div>
        <Link href="#bookGet" name="bookGet">
          <button
            type="button"
            className="whitespace-nowrap flex  cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon px-8 py-2 hover:bg-customBlue active:bg-customBlueTwo"
          >
            <span className="text-[14px] leading-[16.8px] font-semibold text-white">
              {t("Get the book")}
            </span>
          </button>
        </Link>
        <button
          id="burger"
          className="py-2 px-1.5 hidden max-sm:inline-block"
          type="button"
          onClick={handleClickBurger}
        >
          <div className="w-[18px] h-0.5 bg-customBlue mb-1"></div>
          <div className="w-[18px] h-0.5 bg-customBlue mb-1"></div>
          <div className="w-[18px] h-0.5 bg-customBlue"></div>
        </button>
      </div>
    </header>
  );
};
export default Header;
