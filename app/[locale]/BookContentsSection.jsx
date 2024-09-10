import Image from "next/image";
import Link from "next/link";
import initTranslations from "../i18n"; // Import the translations

const BookContentsSection = async ({ ref, handleClickButton, locale }) => {
  const { t } = await initTranslations(locale, ["home"]); // Initialize translations
  const book3 = locale === "ar" ? "/book3_ar.png" : "/book3.png"; // Set the image source based on the locale
  const mirrorClass = locale === "ar" ? "transform scale-x-[-1]" : "";
  const book4 = locale === "ar" ? "/book4_ar.png" : "/book4.png"; // Set the image source based on the locale
  return (
    <section ref={ref} id="book">
      <div className="max-w-screen-xl mx-auto pt-3 pb-[100px] flex flex-row max-sm:py-6 max-sm:px-4">
        <div className="flex flex-col max-w-[511px] pt-[50px]">
          <Image
            src={book3}
            alt={t("book")}
            width={511}
            height={750}
            className="object-contain relative top-8 left-24 rtl:right-24 max-sm:hidden"
          />
          <div className="flex flex-row gap-0.5 relative max-sm:hidden rtl:mr-28">
            <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
              <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customBlueSix text-[20px] leading-[52.8px]">
                +
              </span>
            </div>
            <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
              <p className="text-customBlackFour text-[16px] leading-[19.2px]">
                {t("Useful indicators for trading strategies")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20 max-w-[830px] w-full max-sm:pt-0">
          <div className="max-sm:flex max-sm:flex-row max-sm:relative relative">
            <Image
              src={book4}
              alt={t("book")}
              width={161}
              height={211}
              className="hidden absolute -left-2 rtl:-right-40 mx-auto top-0 object-cover scale-125 max-sm:block max-sm:w-[188px]  max-sm:h-[230px]"
            />
            <div className="flex flex-col max-sm:max-w-[236px] max-sm:ml-auto max-sm:rtl:mr-32 max-sm:w-full  max-[360px]:max-w-[200px]">
              <h2 className="text-[40px] font-medium leading-[48px] text-customBlackOne max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-semibold max-sm:ml-12 rtl:max-sm:mr-12">
                {t("What's inside the strategy tutorial book?")}
              </h2>
              <Image
                src="/line2.png"
                alt={t("line")}
                width={227}
                height={48}
                className={`object-contain my-4 hidden max-sm:inline-block ${mirrorClass}`}
              />
              <Image
                src="/line.png"
                alt={t("line")}
                width={800}
                height={48}
                className={`object-contain max-sm:hidden rtl:-mr-16 ${mirrorClass}`}
              />
              <div className="flex flex-row gap-0.5 relative ml-10 max-sm:gap-4 max-sm:ml-12 rtl:max-sm:mr-12">
                <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center max-sm:bg-transparent">
                  <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customBlueSix text-[20px] leading-[52.8px] max-sm:text-[16px] max-sm:leading-[19.2px]">
                    +
                  </span>
                </div>

                <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center max-sm:px-0 max-sm:bg-transparent">
                  <p className="text-customBlackFour text-[16px] leading-[19.2px] max-sm:text-[12px] max-sm:leading-[14.4px]">
                    {t(
                      "The basics of working in Forex and Gold market on the MT4 platform"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-11 max-w-[761px] ml-10 max-sm:mt-6 max-sm:mb-1 max-sm:ml-0 max-sm:gap-2">
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Price levels for transactions")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Rules for managing losses and setting profit targets")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Time intervals for entry based on Major Players' Activity")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Indicator settings")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Clear rules for entering and exiting trades")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Adapting intraday strategy to daily charts")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] max-sm:text-[16px] max-sm:leading-[19.2px]">
              {t("Psychological preparation for trades")}
            </p>
            <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] max-sm:text-[16px] max-sm:leading-[19.2px] border-t border-customGreyrules">
              {t("Money management rules")}
            </p>
          </div>
          <Link
            href="#bookGet"
            name="bookGet"
            handleClickButton={handleClickButton}
          >
            <button
              type="button"
              className="ml-10 max-w-[356px] bg-customOrangeTwo transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree flex cursor-pointer items-center gap-2 justify-center rounded-[44px] px-[44px] py-3 max-sm:ml-0 max-sm:w-full"
            >
              <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[16px] max-sm:leading-[19.2px]">
                {t("Get the book")}
              </span>
              <Image
                src="/arrowWhite.svg"
                alt="arrow"
                width={34}
                height={3}
                style={{
                  transform: locale === "ar" ? "rotate(180deg)" : "none",
                }}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookContentsSection;
