"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function ClientSideWrapper({ children }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const { locale, defaultLocale } = router;
    if (locale !== defaultLocale) {
      router.push(router.asPath, router.asPath, { locale });
    }
  }, [router]);

  const refs = {
    tradingStrategy: useRef(null),
    strategy: useRef(null),
    book: useRef(null),
    reasonsFailure: useRef(null),
    authors: useRef(null),
    bookGet: useRef(null),
  };

  function handleClickButton(e) {
    const name = e.target.attributes.name.value;
    const element = refs[name].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Clone and enhance children with additional props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isActive,
        setIsActive,
        formSubmitted,
        setFormSubmitted,
        handleClickButton,
        refs,
      });
    }
    return child;
  });

  return <>{enhancedChildren}</>;
}
