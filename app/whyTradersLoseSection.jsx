import Image from "next/image";

const WhyTradersLoseSection = ({ref}) => {
    return (
        <section className="relative" ref={ref} id="reasonsFailure">
            <div className="absolute w-full h-full top-0 left-0 z-10 box-shadow-three"></div>
            <div className="max-w-screen-xl mx-auto pt-10 flex flex-row gap-20 relative z-20">
                <Image src="/man3.png" alt="man" height={549} width={551}/>
                <div className="flex flex-col py-[51px] gap-10">
                    <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackOne">Why do traders
                        lose?</h2>
                    <ul className="flex flex-col gap-3">
                        <li className="flex flex-row relative gap-0.5">
                            <div
                                className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[52.8px]">1</span>
                            </div>
                            <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                            <div
                                className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <p className="text-customBlackFour text-[16px] leading-[19.2px]">Chasing Prices and
                                    Suffering Losses</p></div>
                        </li>
                        <li className="flex flex-row relative gap-0.5">
                            <div
                                className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[52.8px]">2</span>
                            </div>
                            <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                            <div
                                className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <p className="text-customBlackFour text-[16px] leading-[19.2px]">Misunderstanding Market
                                    Direction</p></div>
                        </li>
                        <li className="flex flex-row relative gap-0.5">
                            <div
                                className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[52.8px]">3</span>
                            </div>
                            <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                            <div
                                className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <p className="text-customBlackFour text-[16px] leading-[19.2px]">Choosing the Wrong
                                    Timeframe</p></div>
                        </li>
                        <li className="flex flex-row relative gap-0.5">
                            <div
                                className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[52.8px]">4</span>
                            </div>
                            <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                            <div
                                className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <p className="text-customBlackFour text-[16px] leading-[19.2px]">Entering Trades at the
                                    Wrong Time</p></div>
                        </li>
                        <li className="flex flex-row relative gap-0.5">
                            <div
                                className="w-10 h-10 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <span
                                    className="text-white flex items-center justify-center w-6 h-6 rounded-[100px] px-2 bg-customOrangeTwo text-[20px] leading-[52.8px]">5</span>
                            </div>
                            <div className="w-4 h-3.5 bg-customGreySeventeen my-auto absolute left-8 top-3.5"></div>
                            <div
                                className="px-4 bg-customGreySeventeen rounded-[100px] flex items-center justify-center">
                                <p className="text-customBlackFour text-[16px] leading-[19.2px]">Falling Victim to
                                    Market Manipulation</p></div>
                        </li>
                    </ul>
                    <p className="text-[24px] leading-[28.8px] font-medium text-customBlackOne">
                        <span className="text-customOrangeTwo">///</span>Our tutorial provides the insights and
                        solutions to help you trade more effectively
                    </p>
                </div>
            </div>
            <div className="w-full h-11 bg-customGreyFour rounded-t-[80px] relative z-20"></div>
        </section>
    )
}

export default WhyTradersLoseSection;