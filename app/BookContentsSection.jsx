import Image from "next/image";
import Link from "next/link";

const BookContentsSection = ({ref, handleClickButton}) => {
    return (
        <section ref={ref} id="book">
            <div className="max-w-screen-xl mx-auto pt-3 pb-[100px] flex flex-row">
                <div className="flex flex-col max-w-[511px] pt-[50px]">
                    <Image src="/book3.png" alt="book" width={511} height={750}
                           className="object-contain relative top-8 left-24"/>
                    <div className="flex flex-row gap-0.5 relative">
                        <div
                            className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customBlueSix text-[20px] leading-[52.8px]">+</span>
                        </div>
                        <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                        <div
                            className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                            <p className="text-customBlackFour text-[16px] leading-[19.2px]">Useful indicators for
                                trading strategies</p></div>
                    </div>
                </div>
                <div className="flex flex-col pt-20 max-w-[830px] w-full">
                    <h2 className="text-[40px] font-medium leading-[48px] text-customBlackOne">What's inside the
                        strategy tutorial book?</h2>
                    <Image src="/line.png" alt="line" width={800} height={48} className="object-contain"/>
                    <div className="flex flex-row gap-0.5 relative ml-10">
                        <div
                            className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customBlueSix text-[20px] leading-[52.8px]">+</span>
                        </div>
                        <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                        <div
                            className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                            <p className="text-customBlackFour text-[16px] leading-[19.2px]">The basics of working
                                in Forex and Gold market on the MT4 platform</p></div>
                    </div>
                    <div className="my-11 max-w-[761px] ml-10">
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Price
                            levels for transactions</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Rules
                            for managing losses and setting profit targets</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Time
                            intervals for entry based on Major Players' Activity</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Indicator
                            settings</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Clear
                            rules for entering and exiting trades</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Adapting
                            intraday strategy to daily charts</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Psychological
                            preparation for trades</p>
                        <p className="p-2.5 text-customBlackOne text-[20px] leading-[24px] border-b-[1px] border-solid border-customGrey">Money
                            management rules</p>
                    </div>
                    <Link href="#bookGet" name="bookGet" handleClickButton={handleClickButton}>
                        <button type="button"
                                className="ml-10 max-w-[356px] bg-customOrangeTwo transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree flex cursor-pointer items-center gap-2 justify-center rounded-[44px] px-[44px] py-3">
                            <span className="text-[20px] font-semibold leading-[24px] text-white">Get the book</span>
                            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BookContentsSection;