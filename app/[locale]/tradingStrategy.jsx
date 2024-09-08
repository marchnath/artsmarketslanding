import Form from "./form";
import Image from "next/image";
import initTranslations from "../i18n";

const TradingStrategy = async ({
  isActive,
  formSubmitted,
  setFormSubmitted,
  setIsActive,
  ref,
  locale,
}) => {
  const { t, resources } = await initTranslations(locale, ["home"]);
  const imageSrc = locale === "ar" ? "/book_ar.png" : "/book.png";

  return (
    <section
      className="relative rounded-b-[80px] overflow-hidden pb-[84px]"
      id="tradingStrategy"
      ref={ref}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient max-sm:hidden"></div>
      <div className="mx-auto flex max-w-[1240px] flex-row  gap-5 justify-between pt-6 relative z-20 max-sm:flex-col">
        <div className="w-full max-w-[678px] rounded-[44px] relative max-sm:rounded-3xl">
          <div className="absolute w-full h-full top-0 left-0 z-10 bg-customGreySixteen opacity-40 rounded-[44px] max-sm:rounded-3xl"></div>
          <div className="relative z-20 flex flex-col pt-[78px] mb-[123px] max-sm:p-8 max-sm:mb-0">
            <div
              className={`flex flex-col pb-5 ${
                locale === "ar" ? "pr-[94px]" : "pl-[94px]"
              } max-sm:pl-0`}
            >
              <p className="text-[20px]  leading-[24px] text-customOrangeThree pb-2 max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:pb-1">
                {t("Trading strategy")}
              </p>
              <h1 className="text-[64px] font-semibold leading-[76.8px] text-customBlueThree max-sm:text-[32px] max-sm:leading-[38.4px] max-sm:font-medium">
                {t("The Gold Fund")}
              </h1>
            </div>
            <Image
              src="/schedule.png"
              alt="schedule"
              width={678}
              height={430}
              className="object-contain w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 rtl:ml-6 ltr:ml-24 ltr:pl-2.5 rtl:pr-2.5 rtl:border-r-[1px] ltr:border-l-[1px] border-solid border-customOrangeTen max-w-[412px] max-sm:relative max-sm:ml-0">
              {" "}
              <p className="text-[16px] leading-[19.2px] text-customGreyEleven max-sm:text-[14px] max-sm:leading-[16.8px]">
                {t("The strategy description")}
              </p>
              <p className="text-[16px] leading-[19.2px] text-customGreyEleven max-sm:text-[14px] max-sm:leading-[16.8px]">
                {t("You will get")}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[582px] w-fill rounded-[44px] bg-customGreyFour px-[72px] py-[48px] max-sm:mx-4 max-sm:px-0 max-sm:py-0 max-sm:bg-white max-sm:rounded-0">
          <div className="flex flex-row relative pt-[89px] mb-[123px] max-sm:mb-16 max-sm:pt-16">
            <Image
              src={imageSrc}
              alt="book"
              width={302}
              height={351}
              className="object-contain absolute -left-[51px] sm:rtl:-right-[51px] rtl:right-0 top-0 rtl:-top-3 max-sm:w-[188px] max-sm:h-[230px] max-sm:-left-0 max-sm:scale-125 max-sm:top-6"
            />
            <div className="flex flex-col justify-between max-w-[245px] ml-auto rtl:mr-40  relative z-20 max-sm:max-w-[179px] max-[350px]:max-w-[160px]">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne max-sm:text-[16px] max-sm:leading-[19.2px]">
                  {t("Download the free Trading Strategy tutorial")}
                </p>
                <p className="text-[16px] leading-[19.2px] text-customBlackOne max-sm:text-[14px] max-sm:leading-[16.8px]">
                  {t("Get % bonus")}
                </p>
              </div>
            </div>
          </div>
          <div className="max-sm:px-3 max-sm:py-8 max-sm:rounded-2xl max-sm:relative">
            <div className="hidden absolute w-full h-full top-0 left-0 z-10 bg-customGreySixteen opacity-40 max-sm:rounded-2xl max-sm:inline-block"></div>
            <Form
              isActive={isActive}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              setIsActive={setIsActive}
              locale={locale}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TradingStrategy;
