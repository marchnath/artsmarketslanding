"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = ({ locale }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { t } = useTranslation();
  return (
    <footer className="bg-custom-gradient-two min-w-80">
      <div className="mx-auto max-w-[1240px] pb-[91px] pt-[100px] max-sm:pt-14 max-sm:pb-8 max-sm:px-4  max-sm:min-w-xs">
        <div className="mb-16 flex flex-row gap-2.5 max-sm:mb-6">
          <Image
            src="logo.svg"
            alt="logo"
            width={55}
            height={38}
            className="object-contain"
          />

          <p className="w-40 text-[20px] font-semibold leading-[24px] text-customBlackOne">
            {t("the best")}
          </p>
        </div>
        <div className="mb-[101px] flex flex-row gap-9 max-sm:flex-col max-sm:gap-2 max-sm:mb-6">
          <div className="flex w-[111px] flex-col max-sm:w-[88px]">
            <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
              {t("legal")}
            </p>
            <div className="h-[1px] w-full bg-customBlueFour"></div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px] leading-[14.4px] text-customBlackOne  max-sm:text-[8px] max-sm:leading-[9.6px]">
              {t("artsmrkts ltd 1")}
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              {t("artsmrkts ltd 2")}
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              {t("Risk Warning")}
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              {t("Risk Warning 2")}
            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              {t("Risk Warning 3")}
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between border-t-[1px] border-customBlueFour pt-11  max-sm:pt-6">
          <Link
            href="https://drive.google.com/file/d/1SaRFtM6Ju29GN-TPSsuWAKxKtUuepSwg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] leading-[16.8px] text-customBlackOne max-sm:text-[16px] max-sm:leading-[19.2px]"
          >
            {t("Privacy Policy footer")}
          </Link>

          <ul className="flex flex-row gap-2">
            {/* <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "facebook"
                      ? "facebookHover.svg"
                      : "facebook.svg"
                  }
                  alt="facebook"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${
                    hoveredIcon === "facebook" ? "box-shadow-icon" : ""
                  } object-contain`}
                  onMouseEnter={() => setHoveredIcon("facebook")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li> */}
            <li>
              <Link
                href="https://www.instagram.com/artsmrkts?igsh=MXN2dndzaWRnNjQzNA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={
                    hoveredIcon === "instagram"
                      ? "instagramHover.svg"
                      : "instagram.svg"
                  }
                  alt="instagram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${
                    hoveredIcon === "instagram" ? "box-shadow-icon" : ""
                  } object-contain`}
                  onMouseEnter={() => setHoveredIcon("instagram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/artsmrkts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={hoveredIcon === "in" ? "inHover.svg" : "in.svg"}
                  alt="in"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${
                    hoveredIcon === "in" ? "box-shadow-icon" : ""
                  } object-contain`}
                  onMouseEnter={() => setHoveredIcon("in")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://t.me/artsmrkts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={
                    hoveredIcon === "telegram"
                      ? "telegramHover.svg"
                      : "telegram.svg"
                  }
                  alt="telegram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${
                    hoveredIcon === "telegram" ? "box-shadow-icon" : ""
                  } object-contain`}
                  onMouseEnter={() => setHoveredIcon("telegram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            {/* <li>
              <Link
                href="https://twitter.com/artsmrkts?s=11&t=HZLcD36vbgd7FHwGyYZ08w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={hoveredIcon === "unix" ? "unixHover.svg" : "unix.svg"}
                  alt="unix"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${
                    hoveredIcon === "unix" ? "box-shadow-icon" : ""
                  } object-contain`}
                  onMouseEnter={() => setHoveredIcon("unix")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
