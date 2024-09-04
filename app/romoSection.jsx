import Link from "next/link";
import Image from "next/image";

const PromoSection = ({handleClickButton}) => {
    return (
        <section className="bg-customGreyFour">
            <div className="max-w-screen-xl mx-auto pt-16 flex flex-col">
                <div className="flex flex-col gap-11 bg-customOrangeThree rounded-t-[80px] pt-[87px] pb-[67px] pl-[87px]">
                    <p className="max-w-[1038px] text-[44px] font-medium leading-[52.8px] text-white">
                        With this strategy, you'll effortlessly learn how to identify trends and maximize their potential and your profit
                    </p>
                    <div className="flex flex-row gap-11">
                        <div className="flex flex-row items-center gap-4 max-w-[380px] w-full">
                            <Image src="/books.svg" alt="books" width={30} height={28} className="object-contain"/>
                            <p className="text-white text-[20px] leading-[24px]">over 50 charts patterns</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Image src="/doc.svg" alt="book" width={33} height={33} className="object-contain"/>
                            <p className="text-white text-[20px] leading-[24px]">
                                20 pages of structured information in pdf format
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-b-[80px] overflow-hidden relative">
                    <Link href="#bookGet" name="bookGet" handleClickButton={handleClickButton} className="absolute z-20 bottom-16 left-24 flex-1">
                        <button
                            type="button"
                            className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
                        >
                            <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive">
                              Get the book
                            </span>
                        </button>
                    </Link>
                    <Image src="/stock.png" alt="stock" width={1280} height={181} className="object-contain"/>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
