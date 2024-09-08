"use client";

import React, { useState } from "react";
import { sendEmail } from "../../api/send-email/route";
// import FormComponent from "./FormComponent";

const page = () => {
  const handleSubmit = async (formData) => {
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
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <FormComponent handleSubmit={handleSubmit} />
    </div>
  );
};

export default page;

const FormComponent = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      message,
      language,
      phone_number,
    };
    handleSubmit(formData);
  };

  return (
    <div>
      {" "}
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div>
          <label>Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="">Select a language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button type="submit">Submit</button>
        <br />
        <br />
        <br />
      </form>
      <button onClick={sendEmail}>send email</button>
    </div>
  );
};
