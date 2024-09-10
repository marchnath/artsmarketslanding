import Image from "next/image";
import Form from "./form";
import initTranslations from "../i18n";

const Trading = async ({
  isActive,
  formSubmitted,
  setFormSubmitted,
  setIsActive,
  ref,
  locale,
}) => {
  const { t, resources } = await initTranslations(locale, ["home"]);

  const book4 = locale === "ar" ? "/book4_ar.png" : "/book4.png";
  const book2 = locale === "ar" ? "/book2_ar.png" : "/book2.png";

  return (
    <section className="relative" ref={ref} id="bookGet">
      <div className="absolute w-full h-full top-0 ltr:left-0 rtl:right-0 z-10 bg-custom-gradient-three"></div>
      <div className="max-w-[1240px] mx-auto pt-[75px] relative z-20 max-sm:pt-6 max-sm:px-4  max-sm:min-w-xs max-sm:max-w-[375px] max-sm:mx-auto">
        <Image
          src={book4}
          alt="book"
          width={188}
          height={230}
          className="absolute hidden ltr:left-0 rtl:right-0  top-10 rtl:top-4 object-cover scale-125 max-sm:block max-sm:w-[188px]  max-sm:h-[230px]"
        />
        <div className="flex flex-row ltr:pl-[91px] rtl:mr-[140px] gap-6 max-sm:flex-col max-sm:max-w-[179px] ltr:max-sm:pl-0 rtl:max-sm:pr-0 max-sm:ml-auto max-sm:mt-14 max-sm:mb-10">
          <h2 className="font-medium text-[44px] leading-[52.8px] text-customBlackOne max-sm:text-[16px] max-sm:leading-[19.2px]  max-sm:font-semibold">
            {t("Download prompt")}
          </h2>
          <div className="flex flex-row gap-5">
            <Image
              src="/arrowRed.svg"
              alt="arrow"
              width={201}
              height={2}
              className="object-contain relative rtl:-top-7 top-0 max-sm:hidden"
              style={{ transform: locale === "ar" ? "rotate(180deg)" : "none" }}
            />
            <Image
              src="/arrowRedTwo.svg"
              alt="arrow"
              width={31}
              height={2}
              className="hidden object-contain relative -top-2 max-sm:inline-block"
              style={{ transform: locale === "ar" ? "rotate(180deg)" : "none" }}
            />
            <p className="text-[20px] leading-[24px] sm:mt-8 rtl:sm:mb-20   text-customOrangeThree font-medium max-sm:text-[14px] max-sm:leading-[16.8px]  max-sm:font-normal">
              {t("Get % bonus")}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Image
            src={book2}
            alt="book"
            width={556}
            height={658}
            className="object-contain max-sm:hidden rtl:mr-20"
          />
          <div className="my-14 p-16 max-w-[610px] relative rounded-2xl max-sm:mb-6 max-sm:mt-0 max-sm:py-8 max-sm:px-3 max-sm:min-w-fill-available">
            <div className="absolute w-full h-full top-0 ltr:left-0 rtl:right-0 z-10 bg-white opacity-40 rounded-2xl max-sm:bg-customGreySixteen"></div>
            <Form
              isActive={isActive}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              setIsActive={setIsActive}
              locale={locale}
              sectionId={"bookGet"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trading;
