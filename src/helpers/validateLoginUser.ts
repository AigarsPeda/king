import { emailPattern } from "../utils/emailRegExp";

export const validateLoginUser = ({
  email,
  password
}: {
  email: string;
  password: string;
}): {
  isValid: boolean;
  errorMessage: string;
} => {
  let isValid = true;
  let errorMessage = "";

  if (email.trim().length === 0) {
    isValid = false;
    errorMessage = "email isn't provided";
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
