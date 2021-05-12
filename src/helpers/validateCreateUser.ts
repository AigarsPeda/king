import { emailPattern } from "../utils/emailRegExp";

export const validateCreateUser = ({
  name,
  surname,
  email,
  password,
  terms
}: {
  name: string;
  surname: string;
  email: string;
  password: string;
  terms: boolean;
}): {
  isValid: boolean;
  errorMessage: string;
} => {
  let isValid = true;
  let errorMessage = "";

  // TODO: no special characters
  // TODO: no numbers
  if (name.trim().length === 0) {
    isValid = false;
    errorMessage = "name isn't provided";
  }

  if (surname.trim().length === 0) {
    isValid = false;
    errorMessage = "surname isn't provided";
  }

  if (email.trim().length === 0) {
    isValid = false;
    errorMessage = "email isn't provided";
  }

  if (terms !== true) {
    isValid = false;
    errorMessage = "you must agree to terms of service";
  }

  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessage = "email isn't valid";
  }

  if (password.trim().length <= 5) {
    isValid = false;
    errorMessage = "password is to short, must be at least 5 characters long";
  }

  return { isValid, errorMessage };
};
