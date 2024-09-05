import Image from "next/image";
import Form from "@/app/form";

const Trading = ({isActive, formSubmitted, setFormSubmitted, setIsActive, ref}) => {
    return (
        <section className="relative" ref={ref} id="bookGet">
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-custom-gradient-three"></div>
            <div className="max-w-[1240px] mx-auto pt-[75px] relative z-20 max-sm:pt-6 max-sm:px-4  max-sm:min-w-xs max-sm:max-w-[375px] max-sm:mx-auto">
                <Image src="/book4.png" alt="book" width={188} height={230} className="hidden absolute left-0 top-10object-cover scale-125 max-sm:block max-sm:w-[188px]  max-sm:h-[230px]" />
                <div className="flex flex-row pl-[91px] gap-6 max-sm:flex-col max-sm:max-w-[179px] max-sm:pl-0 max-sm:ml-auto max-sm:mt-14 max-sm:mb-10">
                    <h2 className="font-medium text-[44px] leading-[52.8px] text-customBlackOne max-sm:text-[16px] max-sm:leading-[19.2px]  max-sm:font-semibold">Download the Trading Strategy tutorial</h2>
                    <div className="flex flex-row gap-5">
                        <Image src="/arrowRed.svg" alt="arrow" width={201} height={2} className="object-contain relative -top-7 max-sm:hidden"/>
                        <Image src="/arrowRedTwo.svg" alt="arrow" width={31} height={2} className="hidden object-contain relative -top-7 max-sm:inline-block"/>
                        <p className="text-[20px] leading-[24px] text-customOrangeThree font-medium max-sm:text-[14px] max-sm:leading-[16.8px]  max-sm:font-normal">Get the 20% bonus on your deposit with the Artsmrkts broker</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <Image src="/book2.png" alt="book" width={556} height={658} className="object-contain max-sm:hidden" />
                    <div className="my-14 p-16 max-w-[610px] relative rounded-2xl max-sm:mb-6 max-sm:mt-0 max-sm:py-8 max-sm:px-3 max-sm:min-w-fill-available">
                        <div className="absolute w-full h-full top-0 left-0 z-10 bg-white opacity-40 rounded-2xl max-sm:bg-customGreySixteen"></div>
                        <Form isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Trading;