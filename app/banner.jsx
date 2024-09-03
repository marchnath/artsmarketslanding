import Form from "@/app/form";
import Image from "next/image";

const Banner = () => {
    return (
        <header>
            <div className="mx-auto flex max-w-[1240px] flex-row  gap-5 justify-between pt-6">
                <div className="flex-1"></div>
                <div className="flex-1validators.js">
                    <div className="flex flex-row p-6 max-w-md relative w-full rounded-2xl overflow-hidden">
                        <Image src="/book.svg" alt="book" width={269} height={300}
                               className="object-contain absolute left-0 rigth-0"/>
                        <div className="flex flex-col justify-between max-w-52 ml-auto relative z-20">
                            <div className="flex flex-col gap-2">
                                <p className="text-[20px] font-semibold leading-[24px] text-customBlackOne">Download the Guides</p>
                                <p className="text-[16px] leading-[19.2px] text-customBlackOne">All PDF-instructions
                                    in one place. Lets start your trading experience!</p>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </header>
    )
}
export default Banner;