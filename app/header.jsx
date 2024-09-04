"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {


    return (
        <header>
            <div className="mx-auto flex max-h-[83px] max-w-[1240px] flex-row items-center justify-between py-6">
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

                    <div className="flex flex-row items-center gap-3 px-4 py-2">
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
                            <span className="text-[16px] leading-[19.2px] text-customBlackFour">EN</span>
                        </div>
                        <div className="flex h-2.5 w-2.5 items-center justify-center">
                            <Image
                                src="arrow.svg"
                                alt="arrow"
                                width={7}
                                height={4}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <p className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour">Trading strategy</p>
                    <p className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour">Who needs the strategy</p>
                    <p className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour">Book</p>
                    <p className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour">Reasons of failure</p>
                    <p className="text-[16px] leading-[19.2px] py-2 px-4 cursor-pointer hover:text-customRedText rounded-[44px] active:bg-customOrangeFour">Authors</p>
                </div>


                <Link href="/">
                    <button type="button"
                            className="whitespace-nowrap flex  cursor-pointer items-center justify-center rounded-[44px] bg-customBlueFon px-8 py-2 hover:bg-customBlue active:bg-customBlueTwo">
                        <span className="text-[14px] leading-[16.8px] font-semibold text-white">Get the book</span>
                    </button>
                </Link>
            </div>
        </header>
    );
};
export default Header;
