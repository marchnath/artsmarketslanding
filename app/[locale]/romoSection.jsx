import Link from "next/link";
import Image from "next/image";
import { t } from "i18next";
import initTranslations from "../i18n";

const PromoSection = async ({ handleClickButton, locale }) => {
  const { t, resources } = await initTranslations(locale, ["home"]);
  return (
    <section className="bg-customGreyFour relative max-sm:bg-white">
      <div className="max-w-screen-xl mx-auto pt-16 flex flex-col max-sm:pt-6 max-sm:px-4">
        <div className="flex flex-col gap-11 bg-customOrangeThree rounded-t-[80px] pt-[87px] pb-[67px] ltr:pl-[87px] rtl:pr-[87px] max-sm:px-6 max-sm:py-11 max-sm:rounded-[44px] max-sm:relative max-sm:z-10">
          <p className="max-w-[1038px] text-[44px] font-medium leading-[52.8px] text-white max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-semibold">
            {t("with this strategy")}
          </p>
          <div className="flex flex-row gap-11 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-row items-center gap-4 max-w-[380px] w-full">
              <Image
                src="/books.svg"
                alt="books"
                width={30}
                height={28}
                className="object-contain max-sm:h-4 max-sm:w-4"
              />
              <p className="text-white text-[20px] leading-[24px] max-sm:text-[14px] max-sm:leading-[16.8px]">
                {t("over 50 charts patterns")}
              </p>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/doc.svg"
                alt="book"
                width={33}
                height={33}
                className="object-contain  max-sm:h-4 max-sm:w-4"
              />
              <p className="text-white text-[20px] leading-[24px] max-sm:text-[14px] max-sm:leading-[16.8px]">
                {t("20 pages")}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-b-[80px] relative max-sm:rounded-b-[44px] max-sm:h-[136px] max-sm:bottom-10 max-sm:z-0">
          <Link
            href="#bookGet"
            name="bookGet"
            handleClickButton={handleClickButton}
            className="absolute z-20 bottom-16 ltr:left-24 rtl:right-24 flex-1 max-sm:bottom-8 ltr:max-sm:left-0 rtl:max-sm:right-0 ltr:max-sm:right-0 rtl:max-sm:left-0"
          >
            <button
              type="button"
              className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 whitespace-nowrap transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey max-sm:px-16 max-sm:mx-auto"
            >
              <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">
                {t("Get the book")}
              </span>
            </button>
          </Link>
          <Image
            src="/stock.png"
            alt="stock"
            width={1280}
            height={181}
            className="rounded-b-[80px] object-cover max-sm:h-[136px] max-sm:rounded-b-[44px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
