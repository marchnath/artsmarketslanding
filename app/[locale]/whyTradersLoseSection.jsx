import Image from "next/image";
import initTranslations from "../i18n";

const WhyTradersLoseSection = async ({ ref, locale }) => {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <section className="relative" ref={ref} id="reasonsFailure">
      <div className="absolute w-full h-full top-0 left-0 z-10 box-shadow-three max-sm:hidden"></div>
      <div className="max-w-screen-xl mx-auto pt-10 flex flex-row gap-20 relative z-20 max-sm:pt-6 max-sm:px-4">
        <Image
          src="/man3.png"
          alt="man"
          height={549}
          width={551}
          className="object-cover max-sm:hidden"
        />
        <div className="flex flex-col py-[51px] gap-10 max-sm:gap-0 max-sm:py-0">
          <div className="max-sm:flex max-sm:flex-row">
            <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackOne max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-semibold max-sm:pt-4">
              {t("why do traders lose")}
            </h2>
            <Image
              src="/man3.png"
              alt="man"
              height={187}
              width={191}
              className="object-cover flip-horizontal hidden max-sm:inline-block"
            />
          </div>
          <ul
            className="flex flex-col gap-3 max-sm:px-1.5 max-sm:py-7
                    max-sm:relative max-sm:rounded-t-[44px]
                    "
          >
            <li className="flex flex-row relative gap-0.5">
              <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[24px]">
                  1
                </span>
              </div>

              <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <p
                  className="text-customBlackFour text-[16px] leading-[19.2px]
                                max-sm:text-[14px] max-sm:leading-[16.8px]
                                "
                >
                  {t("Chasing Prices and Suffering Losses")}
                </p>
              </div>
            </li>
            <li className="flex flex-row relative gap-0.5">
              <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[24px]">
                  2
                </span>
              </div>
              <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <p
                  className="text-customBlackFour text-[16px] leading-[19.2px]
                                max-sm:text-[14px] max-sm:leading-[16.8px]
                                "
                >
                  {t("Misunderstanding Market Direction")}
                </p>
              </div>
            </li>
            <li className="flex flex-row relative gap-0.5">
              <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[24px]">
                  3
                </span>
              </div>
              <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <p
                  className="text-customBlackFour text-[16px] leading-[19.2px]
                                max-sm:text-[14px] max-sm:leading-[16.8px]
                                "
                >
                  {t("Choosing the Wrong Timeframe")}
                </p>
              </div>
            </li>
            <li className="flex flex-row relative gap-0.5">
              <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[24px]">
                  4
                </span>
              </div>
              <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <p
                  className="text-customBlackFour text-[16px] leading-[19.2px]
                                max-sm:text-[14px] max-sm:leading-[16.8px]
                                "
                >
                  {t("Entering Trades at the Wrong Time")}
                </p>
              </div>
            </li>
            <li className="flex flex-row relative gap-0.5">
              <div className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <span className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[24px]">
                  5
                </span>
              </div>
              <div className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                <p
                  className="text-customBlackFour text-[16px] leading-[19.2px]
                                max-sm:text-[14px] max-sm:leading-[16.8px]
                                "
                >
                  {t("Falling Victim to Market Manipulation")}
                </p>
              </div>
            </li>
          </ul>
          <p className="text-[24px] leading-[28.8px] font-medium text-customBlackOne max-sm:pt-4 max-sm:text-[16px] max-sm:leading-[19.2px] max-sm:font-semibold">
            <span className="text-customOrangeTwo">///</span>{" "}
            {t("Strategy tutorial")}
          </p>
        </div>
      </div>
      <div
        className="w-full h-11 bg-customGreyFour rounded-t-[80px] relative z-20
            max-sm:hidden
            "
      ></div>
    </section>
  );
};

export default WhyTradersLoseSection;
