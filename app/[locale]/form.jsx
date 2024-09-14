"use client";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState, useEffect } from "react";
// import { isValidPhoneNumber } from "react-phone-number-input";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../utils/validators";
import {
  addContactWithBook,
  checkEmailExists,
  checkPhoneExists,
} from "../../lib/supabaseClient";
import { useTranslation } from "react-i18next";
import { useLandingContext } from "./context/context";
import { CgSpinner } from "react-icons/cg";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({
  // setFormSubmitted,
  // setIsActive,
  // formSubmitted,
  // isActive,
  locale,
  onFormSubmit,
  sectionId,
}) => {
  const { t } = useTranslation();

  // const [formSubmitted, setFormSubmitted] = useState(false);

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [defaultCountry, setDefaultCountry] = useState("US");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { formSubmitted, setFormSubmitted, setSectionID } = useLandingContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        console.log(data, "data");
        setDefaultCountry(data.country_code);
      } catch (error) {
        console.error("Error fetching country code:", error);
      }
    };
    fetchCountry();
  }, []); // Empty dependency array to run the effect only once

  const handleChange = (eventOrValue, name) => {
    if (name === "telephone") {
      setInputValuePhone(eventOrValue);
      setPhoneError(validatePhone(eventOrValue));
      return;
    }

    const { name: fieldName, value } = eventOrValue.target;
    switch (fieldName) {
      case "name":
        setInputValueName(value);
        setNameError(validateName(value));
        break;
      case "email":
        setInputValueEmail(value);
        setEmailError(validateEmail(value));
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    setCheckboxError("");
  };

  const handleClickClear = (field) => {
    switch (field) {
      case "name":
        setInputValueName("");
        setNameError("");
        break;
      case "email":
        setInputValueEmail("");
        setEmailError("");
        break;
      default:
        break;
    }
  };

  function redirectToWebsite() {
    openBook();
    setTimeout(() => {
      window.location.href = "https://www.artsmrkts.com";
    }, 6000);
  }

  const openBook = () => {
    const arabicBook =
      "https://drive.google.com/file/d/1Xu-wy93tCthtCvLMjNuAvkyUchqCYdPT/view";
    const englishBook =
      "https://drive.google.com/file/d/1yAAv5IofSiNheaDVG1ZLSRNC8BhZ7fZ1/view?usp=sharing";

    const bookLink = locale === "ar" ? arabicBook : englishBook;
    window.open(bookLink, "_blank");
  };

  // const [isPhoneValid, setIsPhoneValid] = useState(inputValuePhone);

  const handleSubmit = async (event) => {
    // const validPhone = isValidPhoneNumber(inputValuePhone);
    // console.log("validPhone", validPhone);
    // setIsPhoneValid(validPhone);

    setLoading(true);
    console.log("see me here");
    event.preventDefault();
    setNameError(validateName(inputValueName));
    setEmailError(validateEmail(inputValueEmail));
    setPhoneError(validatePhone(inputValuePhone));

    // if (isPhoneValid) {
    //   setPhoneError("");
    // } else if (!isPhoneValid) {
    //   setPhoneError("Invalid phone number");
    //   setPhoneError(validatePhone(inputValuePhone));
    //   setLoading(false);
    // }

    if (!nameError && !emailError && !phoneError && checkboxChecked) {
      try {
        const emailExists = await checkEmailExists(inputValueEmail);
        if (emailExists) {
          setEmailError("This email is already in use.");
          setLoading(false);
          return;
        }

        const phoneExists = await checkPhoneExists(inputValuePhone);
        if (phoneExists) {
          setPhoneError("This phone number is already in use.");
          setLoading(false);
          return;
        }

        const formData = {
          name: inputValueName,
          email: inputValueEmail,
          phone_number: inputValuePhone,
          locale: locale,
        };

        try {
          const response = await fetch("/api/sendMessage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(formData, "formData");
          if (response.ok) {
            // Handle success (e.g., display a success message)
            // Scroll to the form section
            document
              .querySelector(sectionId)
              .scrollIntoView({ behavior: "smooth" });
          } else {
            alert("Email or phone number already exists");
            setEmailError(true);
            setPhoneError(true);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }

        if (!emailError) {
          setLoading(false);
          console.log("emailError", emailError);
          setInputValueName("");
          setInputValueEmail("");
          setInputValuePhone("");
          setNameError("");
          setEmailError("");
          setPhoneError("");
          setCheckboxChecked(false);
          setFormSubmitted(true);
          trackFormSubmit();
          setSectionID(sectionId);
        }

        try {
          const response = await fetch("/api/bot", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(formData, "formData");
        } catch (error) {
          console.error("An error occurred:", error);
        }

        try {
          const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          console.log(formData, "formData");
          if (response.ok && sectionId === "bookGet") {
            // Handle success (e.g., display a success message)
            // Scroll to the form section
            document
              .querySelector("bookGet")
              .scrollIntoView({ behavior: "smooth" });
          } else {
            // Handle error (e.g., display an error message)
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }

        console.log(formSubmitted, "is form submitted?");
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    } else if (!checkboxChecked) {
      setCheckboxError("You must agree to the processing of personal data.");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Ensure the ym function is available
    if (typeof ym === "undefined") {
      console.error("Yandex.Metrika is not loaded");
    } else {
      // Track the form view event
      ym(98279723, "reachGoal", "form-view");
    }
  }, [window.ym]);

  const trackFormSubmit = () => {
    // Ensure the ym function is available
    if (typeof ym === "undefined") {
      console.error("Yandex.Metrika is not loaded");
    } else {
      // Track the form submission event
      ym(98279723, "reachGoal", "form");
    }
  };

  return (
    <form className="flex flex-col gap-2 relative z-20" name="form-call">
      {formSubmitted && (
        <div>
          {" "}
          <button
            disabled={loading}
            type="submit"
            className={`${"bg-customOrangeTwo z-50 mb-6  duration-300 w-full ease-in-out hover:bg-customOrange active:bg-customOrangeThree"} flex cursor-pointer items-center gap-2 justify-center rounded-[44px] px-[44px] py-3`}
            onClick={redirectToWebsite}
          >
            {loading && (
              <CgSpinner className="animate-spin text-2xl sm:text-3xl text-white" />
            )}
            <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[16px] max-sm:leading-[19.2px] whitespace-nowrap">
              {t("Get the book")}
            </span>
            <Image
              src="/arrowWhite.svg"
              alt="arrow"
              width={34}
              height={3}
              style={{ transform: locale === "ar" ? "rotate(180deg)" : "none" }}
            />
          </button>
          <div className="flex flex-col py-[35px] px-[61.5px] mx-auto items-center box-shadow-two rounded-2xl mb-7 relative bg-white max-sm:py-8 max-sm:px-[18px] max-[358px]:px-[0px]">
            <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[100px] bg-customGreenOne">
              <Image
                src="arrow7.svg"
                alt="call"
                width={18}
                height={15}
                className="object-contain "
              />
            </div>
            <p className="text-center text-[16px] leading-[19.2px] text-customBlackOne pt-4 pb-6">
              {t("we have already")}
            </p>
            <Link
              href="https://www.artsmrkts.com"
              className="relative z-20 flex-1"
            >
              <button
                type="button"
                className="flex cursor-pointer flex-row items-center justify-center rounded-[44px] border-[1px] border-customGrey bg-white px-11 py-3 transition-colors duration-300 ease-in-out hover:bg-customGreyTwo active:bg-customGrey"
              >
                <span className="text-[20px] font-semibold leading-[24px] text-customOrangeFive whitespace-nowrap max-[358px]:text-[16px] max-[358px]:leading-[19.2px]">
                  {t("Open demo account")}
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
      {!formSubmitted && (
        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-[14px] leading-[16.8px] text-customGreyEleven"
            >
              {t("Name")}
            </label>
            <div className="relative flex flex-row">
              <input
                value={inputValueName}
                type="text"
                name="name"
                id="name"
                placeholder={t("Jack Jackson")}
                className={`w-full bg-white border-[1px] border-solid  rounded-xl ltr:pl-4 rtl:pr-4 ltr:pr-12 rtl:pl-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${
                  nameError
                    ? "shadow-md border-customOrangeTwo"
                    : "shadow-none border-customGreyTwelve focus:border-customBlueSix"
                } hover:shadow `}
                onChange={(value) => handleChange(value, "name")}
                required
              />
              {inputValueName && (
                <div
                  className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                  onClick={() => handleClickClear("name")}
                >
                  <Image
                    src="/clearField.svg"
                    alt="clear"
                    width={10}
                    height={10}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
              {nameError}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[14px] leading-[16.8px] text-customGreyEleven"
            >
              {t("E-mail")}
            </label>
            <div className="relative flex flex-row">
              <input
                value={inputValueEmail}
                type="email"
                name="email"
                id="email"
                placeholder={t("example@example.com")}
                className={`w-full bg-white border-[1px] border-solid  rounded-xl ltr:pl-4 rtl:pr-4 ltr:pr-12 rtl:pl-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${
                  emailError
                    ? "shadow-md border-customOrangeTwo"
                    : "shadow-none border-customGreyTwelve focus:border-customBlueSix"
                } hover:shadow `}
                onChange={(value) => handleChange(value, "email")}
                required
              />
              {inputValueEmail && (
                <div
                  className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                  onClick={() => handleClickClear("email")}
                >
                  <Image
                    src="/clearField.svg"
                    alt="clear"
                    width={10}
                    height={10}
                    className="object-contain"
                  />
                </div>
              )}
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
              {emailError}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="telephone"
              className="text-[14px] leading-[16.8px] text-customGreyEleven"
            >
              {t("Phone number")}
            </label>
            <div
              className={`h-[56px] relative flex flex-row px-2 py-1.5 border-[1px] border-solid rounded-xl bg-white ${
                phoneError
                  ? "shadow-md border-customOrangeTwo"
                  : "shadow-none border-customGreyTwelve focus:border-customBlueSix"
              } hover:shadow`}
            >
              <PhoneInput
                international
                defaultCountry={defaultCountry}
                type="telephone"
                name="telephone"
                id="telephone"
                value={inputValuePhone}
                onChange={(value) => handleChange(value, "telephone")}
                className="w-full text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none"
                inputClass="w-full py-3 px-2 bg-transparent border-none outline-none"
              />
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
              {phoneError}
            </p>
          </div>
          <div className="flex flex-col gap-1 py-3 max-sm:pt-2 max-sm:pb-0">
            <div className="items-top flex space-x-2 items-center max-sm:items-start">
              <Checkbox
                id="terms1"
                checked={checkboxChecked}
                onCheckedChange={handleCheckboxChange}
                className="rtl:ml-2"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-[16px] leading-[19.2px] text-customBlackSix leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
                >
                  {t(
                    "I agree to the processing of personal data in accordance with the"
                  )}
                  <Link
                    href="https://drive.google.com/file/d/1SaRFtM6Ju29GN-TPSsuWAKxKtUuepSwg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-customRedText underline">
                      {" "}
                      {t("Privacy Policy form")}
                    </span>{" "}
                  </Link>
                  {/* <span className="rtl:hidden">and</span> */}
                  <span>{t("and")}</span>
                  <Link
                    href="https://drive.google.com/file/d/1rwdaSoEfJeYzZMUlGKo59BoE1Kgbviri/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <span className="text-customRedText underline">
                      {t("Terms and Conditions")}
                    </span>
                  </Link>
                  <a
                    href="https://drive.google.com/file/d/1SaRFtM6Ju29GN-TPSsuWAKxKtUuepSwg/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-customRedText active:bg-customOrangeFour"
                  >
                    {/* {t("Privacy Policy")} */}
                  </a>
                </label>
              </div>
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
              {checkboxError}
            </p>
          </div>
        </div>
      )}
      {!formSubmitted && (
        <button
          type="submit"
          disabled={loading}
          className={`${"bg-customOrangeTwo transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"} flex cursor-pointer items-center gap-2 justify-center rounded-[44px] px-[44px] py-3`}
          onClick={handleSubmit}
        >
          {loading && (
            <CgSpinner className="animate-spin text-2xl sm:text-3xl text-white" />
          )}
          <span className="text-[20px] font-semibold leading-[24px] text-white max-sm:text-[16px] max-sm:leading-[19.2px] whitespace-nowrap">
            {t("Get the book")}
          </span>
          <Image
            src="/arrowWhite.svg"
            alt="arrow"
            width={34}
            height={3}
            style={{ transform: locale === "ar" ? "rotate(180deg)" : "none" }}
          />
        </button>
      )}
    </form>
  );
};

export default Form;
