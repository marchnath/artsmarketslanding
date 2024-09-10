"use client";
import { createContext, useContext, useState } from "react";

const LandingContext = createContext();
export const LandingProvider = ({ children }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <LandingContext.Provider
      value={{
        formSubmitted,
        setFormSubmitted,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => useContext(LandingContext);
