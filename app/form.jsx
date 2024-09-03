"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useState } from "react";
import { validateName, validateEmail, validatePhone } from "./utils/validators";
import {addContactWithBook, checkEmailExists, checkPhoneExists} from "../lib/supabaseClient";


const Form = ({ setFormSubmitted, setIsActive }) => {
    const [inputValueName, setInputValueName] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValuePhone, setInputValuePhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState('');

    const handleChange = (eventOrValue, name) => {
        if (name === 'telephone') {
            setInputValuePhone(eventOrValue);
            setPhoneError(validatePhone(eventOrValue));
            return;
        }

        const { name: fieldName, value } = eventOrValue.target;
        switch (fieldName) {
            case 'name':
                setInputValueName(value);
                setNameError(validateName(value));
                break;
            case 'email':
                setInputValueEmail(value);
                setEmailError(validateEmail(value));
                break;
            default:
                break;
        }
    };

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
        setCheckboxError('');
    };

    const handleClickClear = (field) => {
        switch (field) {
            case 'name':
                setInputValueName('');
                setNameError('');
                break;
            case 'email':
                setInputValueEmail('');
                setEmailError('');
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
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

                await addContactWithBook(inputValueName, inputValueEmail, inputValuePhone);
                setInputValueName('');
                setInputValueEmail('');
                setInputValuePhone('');
                setNameError('');
                setEmailError('');
                setPhoneError('');
                setCheckboxChecked(false);
                setIsActive(false);
                setFormSubmitted(true);
            } catch (error) {
                console.error("Error adding contact:", error);
            }
        } else if (!checkboxChecked) {
            setCheckboxError("You must agree to the processing of personal data.");
        }
    };


    return (
        <form className="flex flex-col gap-2" name="form-call" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
            <label htmlFor="name"
                   className="text-[14px] leading-[16.8px] text-customGreyEleven">Name</label>
            <div className="relative flex flex-row">
                <input
                    value={inputValueName}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jack Jackson"
                    className={`w-full bg-white border-[1px] border-solid  rounded-xl pl-4 pr-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${nameError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow `}
                    onChange={(value) => handleChange(value, 'name')}
                    required
                />
                {inputValueName && (
                    <div
                        className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                        onClick={() => handleClickClear('name')}
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
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{nameError}</p>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="email"
                   className="text-[14px] leading-[16.8px] text-customGreyEleven">E-mail</label>
            <div className="relative flex flex-row">
                <input
                    value={inputValueEmail}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className={`w-full bg-white border-[1px] border-solid  rounded-xl pl-4 pr-12 py-[18.5px] text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none  ${emailError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow `}
                    onChange={(value) => handleChange(value, 'email')}
                    required
                />
                {inputValueEmail && (
                    <div
                        className="absolute h-7 w-7 right-6 top-4 cursor-pointer flex items-center justify-center"
                        onClick={() => handleClickClear('email')}
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
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{emailError}</p>
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="telephone"
                   className="text-[14px] leading-[16.8px] text-customGreyEleven">
                Phone number
            </label>
            <div
                className={`h-[56px] relative flex flex-row px-2 py-1.5 border-[1px] border-solid rounded-xl bg-white ${phoneError ? 'shadow-md border-customOrangeTwo' : 'shadow-none border-customGreyTwelve focus:border-customBlueSix'} hover:shadow`}>
                <PhoneInput
                    international
                    defaultCountry="US"
                    type="telephone"
                    name="telephone"
                    id="telephone"
                    value={inputValuePhone}
                    onChange={(value) => handleChange(value, 'telephone')}
                    className="w-full  text-[16px] leading-[19.2px] text-customBlue placeholder-customGreyThirteen outline-none"
                    inputClass="w-full py-3 px-2 bg-transparent border-none outline-none"
                />
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{phoneError}</p>
        </div>
        <div className="flex flex-col gap-1 py-6">
            <div className="items-top flex space-x-2 items-center ">
                <Checkbox id="terms1" checked={checkboxChecked} onCheckedChange={handleCheckboxChange}/>
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-[16px] leading-[19.2px] text-customBlackSix font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-80"
                    >
                        I agree to the processing of personal data in accordance with the Privacy Policy
                    </label>
                </div>
            </div>
            <p className="text-[14px] leading-[16.8px] text-customOrange h-[16.8px]">{checkboxError}</p>
        </div>


        <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 justify-center rounded-[44px] bg-customOrangeTwo px-[44px] py-3 transition-colors duration-300 ease-in-out hover:bg-customOrange active:bg-customOrangeThree"
        >
                            <span className="text-[20px] font-semibold leading-[24px] text-white">
                               Get the book
                            </span>
            <Image src="/arrowWhite.svg" alt="arrow" width={34} height={3}/>
        </button>
    </form>);
}

export default Form;