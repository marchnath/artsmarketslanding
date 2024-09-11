export const validateName = (name) => {
  const namePattern = /^[\p{L}\s\-']+$/u; // Updated regex to allow any Unicode letters
  if (name.length < 1) {
    return "Name is required";
  } else if (name.length < 2) {
    return "Minimum length is 2 characters";
  } else if (name.length > 50) {
    return "The name must contain no more than 50 characters.";
  } else if (!namePattern.test(name)) {
    return "Invalid characters in name";
  } else {
    return "";
  }
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email) {
    return "Email is required";
  } else if (email.length < 4) {
    return "Minimum length is 4 characters";
  } else if (email.length > 50) {
    return "Maximum length is 50 characters";
  } else if (!emailPattern.test(email)) {
    return "Invalid email address";
  } else {
    return "";
  }
};

export const validatePhone = (phone) => {
  if (!phone) {
    return "Phone number is required";
  } else if (phone.startsWith("+0")) {
    return "Invalid international phone number format";
  } else if (
    !/^(\+?[1-9]\d{0,2}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      phone
    )
  ) {
    return "Invalid phone number format";
  } else {
    return "";
  }
};
