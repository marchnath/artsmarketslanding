"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ClientSideWrapper({ children }) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
