"use client";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
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

const Form = ({
  // setFormSubmitted,
  // setIsActive,
  // formSubmitted,
  // isActive,
  locale,
}) => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePhone, setInputValuePhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
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

  const handleSubmit = async (event) => {
    console.log("see me here");
    event.preventDefault();
    setNameError(validateName(inputValueName));
    setEmailError(validateEmail(inputValueEmail));
    setPhoneError(validatePhone(inputValuePhone));

    if (!nameError && !emailError && !phoneError && checkboxChecked) {
      try {
        const emailExists = await checkEmailExists(inputValueEmail);
        if (emailExists) {
          setEmailError("This email is already in use.");
          return;
        }

        const phoneExists = await checkPhoneExists(inputValuePhone);
        if (phoneExists) {
          setPhoneError("This phone number is already in use.");
          return;
        }

        // await addContactWithBook(
        //   inputValueName,
        //   inputValueEmail,
        //   inputValuePhone
        // );

        const formData = {
          name: inputValueName,
          email: inputValueEmail,
          phone_number: inputValuePhone,
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
          } else {
            // Handle error (e.g., display an error message)
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }

        setInputValueName("");
        setInputValueEmail("");
        setInputValuePhone("");
        setNameError("");
        setEmailError("");
        setPhoneError("");
        setCheckboxChecked(false);
        setIsActive(true);
        setFormSubmitted(true);
        console.log(formSubmitted, "is form submitted?");
      } catch (error) {
        console.error("Error adding contact:", error);
      }
    } else if (!checkboxChecked) {
      setCheckboxError("You must agree to the processing of personal data.");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 relative z-20"
      name="form-call"
      onSubmit={handleSubmit}
    >
      {formSubmitted && (
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
          <Link href="/" className="relative z-20 flex-1">
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
                defaultCountry="US"
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
                  <span className="underline text-customRedText active:bg-customOrangeFour">
                    {t("Privacy Policy")}
                  </span>
                </label>
              </div>
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">
              {checkboxError}
            </p>
          </div>
        </div>
      )}
      <button
        disabled={isActive}
        type="submit"
        className={`${
          isActive
            ? "bg-customOrangeFour"
            : "bg-customOrangeTwo transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
        } flex cursor-pointer items-center gap-2 justify-center rounded-[44px] px-[44px] py-3`}
      >
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
    </form>
  );
};

export default Form;
