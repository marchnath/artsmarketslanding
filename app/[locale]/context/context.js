"use client";
import { Section } from "lucide-react";
import { createContext, useContext, useState } from "react";

const LandingContext = createContext();
export const LandingProvider = ({ children }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sectionID, setSectionID] = useState("");

  return (
    <LandingContext.Provider
      value={{
        formSubmitted,
        setFormSubmitted,
        sectionID,
        setSectionID,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => useContext(LandingContext);
