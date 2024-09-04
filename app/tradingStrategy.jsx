import Image from "next/image";
import Form from "@/app/form";

const TradingStrategy = ({isActive, formSubmitted, setFormSubmitted, setIsActive}) => {
    return (
        <section className="relative">
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-custom-gradient-three"></div>
            <div className="max-w-[1240px] mx-auto pt-[75px] relative z-20">
                <div className="flex flex-row pl-[91px] gap-6 items-center">
                    <h2 className="font-medium text-[44px] leading-[52.8px] text-customBlackOne">Download the Trading Strategy tutorial</h2>
                    <div className="flex flex-row gap-5 items-center">
                        <Image src="/arrowRed.svg" alt="arrow" width={201} height={2} className="object-contain"/>
                        <p className="text-[20px] leading-[24px] text-customOrangeThree font-medium">Get the 20% bonus on your deposit with the Artsmrkts broker</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <Image src="/book2.png" alt="book" width={556} height={658} className="object-contain" />
                    <div className="my-14 p-16 max-w-[610px] relative rounded-2xl">
                        <div className="absolute w-full h-full top-0 left-0 z-10 bg-white opacity-40 rounded-2xl"></div>
                        <Form isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TradingStrategy;