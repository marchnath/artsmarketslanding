import Form from "@/app/form";
import Image from "next/image";

const Banner = ({isActive, formSubmitted, setFormSubmitted, setIsActive}) => {
    return (
        <section className="relative rounded-b-[80px] overflow-hidden pb-[84px]">
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-gradient"></div>
            <div className="mx-auto flex max-w-[1240px] flex-row  gap-5 justify-between pt-6 relative z-20 ">
                <div className="w-full max-w-[678px] rounded-[44px] relative">
                    <div className="absolute w-full h-full top-0 left-0 z-10 bg-customGreySixteen opacity-40 rounded-[44px]"></div>
                    <div className="relative z-20 flex flex-col pt-[78px] mb-[123px]">
                        <div className="flex flex-col pb-5 pl-[94px]">
                            <p className="text-[20px] leading-[24px] text-customOrangeThree pb-2">Trading strategy</p>
                            <h1 className="text-[64px] font-semibold leading-[76.8px] text-customBlueThree">The Gold Fund</h1>
                        </div>
                        <Image src="/schedule.png" alt="schedule" width={678} height={430} className="object-contain"/>
                        <div className="absolute bottom-0 left-0 flex flex-col gap-2 ml-24 pl-2.5 border-l-[1px] border-solid border-customOrangeTen max-w-[412px]">
                            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">The strategy is based on how Central banks and other major players in the XAUUSD trade work and use the trend.</p>
                            <p className="text-[16px] leading-[19.2px] text-customGreyEleven">You will get a complete system, indicator settings, levels. Log in and try it with a free demo account</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[582px] w-fill rounded-[44px] bg-customGreyFour px-[72px] py-[48px]">
                    <div className="flex flex-row relative pt-[89px] mb-[123px]">
                        <Image src="/book.png" alt="book" width={302} height={351}
                               className="object-contain absolute -left-[51px] top-0"/>
                        <div className="flex flex-col justify-between max-w-[245px] ml-auto relative z-20">
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Download the free
                                    Trading Strategy tutorial</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne">Get the 20% bonus on your deposit with the Artsmrkts </p>
                            </div>
                        </div>
                    </div>
                    <Form isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
                </div>
            </div>
        </section>
    )
}
export default Banner;