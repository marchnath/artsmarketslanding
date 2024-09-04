"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <footer className="bg-custom-gradient-two">
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
            The best forex broker
          </p>
        </div>
        <div className="mb-[101px] flex flex-row gap-9 max-sm:flex-col max-sm:gap-2 max-sm:mb-6">
          <div className="flex w-[111px] flex-col max-sm:w-[88px]">
            <p className="pb-4 text-[16px] font-bold leading-[19.2px] text-customBlueFour">
              Legal{" "}
            </p>
            <div className="h-[1px] w-full bg-customBlueFour"></div>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-[12px] leading-[14.4px] text-customBlackOne  max-sm:text-[8px] max-sm:leading-[9.6px]">Artsmrkts Ltd, registration number 2023-00238, address: Syrakouson 9, Office 106, 3077, Limassol, Cyprus, is the Saint Vincent And the Grenadies company, which provides certain content and operates the business including in terms of processing payment transactions.</li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">Artsmrkts Ltd Registered Office address: Fortgate Offshore Investment and Legal Services Ltd. Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.

            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              Risk Warning: CFDs are complex instruments and come with a high risk of losing funds rapidly due to leverage.

            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              The vast majority of retail investors face losses when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your deposit. To ensure that you fully understand the risks associated with margin trading, pay attention to our Risk Disclosure.

            </li>
            <li className="text-[12px] leading-[14.4px] text-customBlackOne max-sm:text-[8px] max-sm:leading-[9.6px]">
              At Artsmrkts, most of withdrawals are processed instantly (under 1 minute). Once your funds leave our custody, it's up to your chosen payment provider to process the funds and credit your account.
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-between border-t-[1px] border-customBlueFour pt-11  max-sm:pt-6">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[14px] leading-[16.8px] text-customBlackOne max-sm:text-[16px] max-sm:leading-[19.2px]"
              >
                Privacy Policy
              </Link>

          <ul className="flex flex-row gap-2">
            <li>
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
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "facebook" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("facebook")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "instagram"
                      ? "instagramHover.svg"
                      : "instagram.svg"
                  }
                  alt="instagram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "instagram" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("instagram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={hoveredIcon === "in" ? "inHover.svg" : "in.svg"}
                  alt="in"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "in" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("in")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    hoveredIcon === "telegram"
                      ? "telegramHover.svg"
                      : "telegram.svg"
                  }
                  alt="telegram"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "telegram" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("telegram")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
            <li>
              <Link href="/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={hoveredIcon === "unix" ? "unixHover.svg" : "unix.svg"}
                  alt="unix"
                  width={24}
                  height={24}
                  className={`cursor-pointer rounded-lg ${hoveredIcon === "unix" ? "box-shadow-icon" : ""} object-contain`}
                  onMouseEnter={() => setHoveredIcon("unix")}
                  onMouseLeave={() => setHoveredIcon(null)}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
