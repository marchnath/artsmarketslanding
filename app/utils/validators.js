export const validateName = (name) => {
  const namePattern = /^[A-Za-z\s\-']+$/;
  if (name.length < 1) {
    return "Name is required";
  } else if (name.length < 2) {
    return "Minimum length is 2 characters";
  } else if (name.length > 50) {
    return "The name must contain no more than 50 characters.";
  } else if (!namePattern.test(name)) {
    return "Maximum length is 50 characters";
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
  } else if (
    !/^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      phone
    )
  ) {
    return "Invalid phone number format";
  } else {
    return "";
  }
};
