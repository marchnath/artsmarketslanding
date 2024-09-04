"use client";
import Banner from "@/app/banner";
import TradingStrategy from "@/app/tradingStrategy";
import {useState} from "react";
import Strategy from "@/app/strategy";
import Image from "next/image";


export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <main>
            <Banner isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
            <Strategy />
            <section className="bg-customGreyFour">
                <div className="max-w-screen-xl mx-auto pt-16 flex flex-col">
                    <div className="flex flex-col gap-11 bg-customOrangeThree rounded-t-[80px] pt-[87px] pb-[67px] pl-[87px]">
                        <p className="max-w-[1038px] text-[44px] font-medium leading-[52.8px] text-white">With this strategy, you'll effortlessly learn how to identify trends and maximize their potential and your profit</p>
                        <div className="flex flex-row gap-11">
                            <div className="flex flex-row items-center gap-4">
                                <Image src="/books.svg" alt="books" width={30} height={28} className="object-contain"/>
                                <p className="text-white text-[20px] leading-[24px]">over 50 charts patterns</p>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <Image src="/doc.svg" alt="book" width={33} height={33} className="object-contain"/>
                                <p className="text-white text-[20px] leading-[24px]">20 pages of structured information in pdf format</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-b-[80px] overflow-hidden">
                        <Image src="/stock.png" alt="stock" width={1280} height={181} className="object-contain"/>
                    </div>
                </div>
            </section>
            <TradingStrategy isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} setIsActive={setIsActive}/>
        </main>
    );
}
