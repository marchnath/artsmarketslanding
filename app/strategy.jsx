import Image from "next/image";

const Strategy = () => {
    return (
        <section className="relative">
            <div className="max-w-screen-xl mx-auto pt-16 pb-8">
                <div className="flex flex-col relative gap-8">
                    <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackOne">Who needs the
                        strategy?</h2>
                    <div className="flex flex-row">
                        <ul className="flex flex-col max-w-[727px]">
                            <li className="flex flex-row h-16">
                                <p className="text-[20px] leading-[24px]  py-4 pr-8 max-w-[344px] w-full border-r-[1px] border-customGrey border-solid flex items-center text-customBlackOne">
                                    If you are just starting out
                                </p>
                                <p className="text-[20px] leading-[24px] py-4 px-8 max-w-[368px] w-full text-customBlackOne">
                                    You want to trade successfully
                                </p>
                            </li>
                            <li className="flex flex-row border-t-[1px] border-customGrey border-solid h-[88px]">
                                <p className="text-[20px] leading-[24px]  py-4 pr-8 max-w-[344px] w-full border-r-[1px] border-customGrey border-solid text-customBlackOne">
                                    You don't want to follow a lot of rules
                                </p>
                                <p className="text-[20px] leading-[24px] py-4 px-8 max-w-[368px] w-full text-customBlackOne">
                                    You only have less an hour to trade
                                </p>
                            </li>
                        </ul>
                        <Image src="/darts.png" alt="darts" height={255} width={382}
                               className="object-contain absolute right-0 bottom-0"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Strategy;