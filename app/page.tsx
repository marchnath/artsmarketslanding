"use client";
import TradingStrategy from "@/app/tradingStrategy";
import Trading from "@/app/trading";
import {useRef, useState} from "react";
import Strategy from "@/app/strategy";
import PromoSection from "@/app/romoSection";
import AuthorSection from "@/app/authorSection";
import WhyTradersLoseSection from "@/app/whyTradersLoseSection";
import BookContentsSection from "@/app/BookContentsSection";
import Header from "@/app/header";


export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const refs = {
        tradingStrategy: useRef<HTMLDivElement>(null),
        strategy: useRef<HTMLDivElement>(null),
        book: useRef<HTMLDivElement>(null),
        reasonsFailure: useRef<HTMLDivElement>(null),
        authors: useRef<HTMLDivElement>(null),
        bookGet: useRef<HTMLDivElement>(null),
    };

    function handleClickButton(e) {
        const name = e.target.attributes.name.value;
        const element = refs[name].current;
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    }


    return (
        <>
        {/*<Header handleClickButton={handleClickButton}/>*/}
        <main>
            {/*<TradingStrategy ref={refs.tradingStrategy} isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}*/}
            {/*         setIsActive={setIsActive}/>*/}
            {/*<Strategy ref={refs.strategy}/>*/}
            {/*<BookContentsSection ref={refs.book} handleClickButton={handleClickButton}/>*/}
            {/*<WhyTradersLoseSection ref={refs.reasonsFailure}/>*/}
            {/*<PromoSection handleClickButton={handleClickButton}/>*/}
            <AuthorSection ref={refs.authors}/>
            <Trading  book={refs.bookGet} isActive={isActive} formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}
                             setIsActive={setIsActive}/>
        </main>
        </>
    );
}
