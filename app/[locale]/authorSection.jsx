import Image from "next/image";
import initTranslations from "../i18n";

const AuthorSection = async ({ ref, locale }) => {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <section
      className="bg-customGreyFour max-sm:bg-white"
      ref={ref}
      id="authors"
    >
      <div className="max-w-screen-xl mx-auto pt-20 pb-[100px] flex flex-col gap-20 max-sm:pt-4 max-sm:px-4 max-sm:pb-6 max-sm:gap-2.5">
        <Image
          src="/commas.png"
          alt="commas"
          height={54}
          width={70}
          className="object-contain pb-[60px] max-sm:pb-0 hidden max-sm:pt-3 max-sm:inline-block"
        />
        <p className="text-[32px] leading-[38.4px] font-medium text-customGreyEleven max-w-[1153px] w-full max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:font-normal">
          <span className="text-customOrangeTwo max-sm:hidden">//</span>
          {t("we have uncovered")}
        </p>
        <div className="flex flex-row gap-7 max-sm:flex-col items-end max-sm:font-semibold">
          <div className="flex flex-row gap-9 max-sm:gap-4  max-sm:mx-auto">
            <Image
              src="/commas.png"
              alt="commas"
              height={158}
              width={223}
              className={`object-contain pb-[60px] max-sm:hidden ${
                locale === "ar" ? "scale-x-[-1]" : ""
              }`}
            />
            <div className="flex flex-col max-sm:flex-1">
              <Image
                src="/man1.png"
                alt="man"
                height={160}
                width={161}
                className="object-contain mb-4 rounded-lg"
              />
              <p className="mb-2 text-[14px] leading-[16.8px] font-semibold text-customGreyEleven">
                {t("Michael Kunze")}
              </p>
              <p className="mb-2 text-[12px] leading-[14.4px] text-customGreyEleven">
                {t("Trading Expert")}
              </p>
            </div>
            <div className="flex flex-col  max-sm:flex-1">
              <Image
                src="/man2.png"
                alt="man"
                height={160}
                width={161}
                className="object-contain mb-4 rounded-lg"
              />
              <p className="mb-2 text-[14px] leading-[16.8px] font-semibold text-customGreyEleven">
                {t("Jack Khalib")}
              </p>
              <p className="mb-2 text-[12px] leading-[14.4px] text-customGreyEleven max-w-[161px]">
                <p> {t("Capital Manager")}</p>{" "}
                <p>{t("Svenska Handelsbanken")}</p>
              </p>
            </div>
          </div>
          <p className="text-customOrangeThree text-[20px] leading-[24px] font-semibold max-sm:order-[-1] max-sm:text-[14px] max-sm:leading-[16.8px]">
            {t("Co-authors")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
