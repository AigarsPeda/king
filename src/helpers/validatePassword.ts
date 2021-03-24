export const validatePassword = (
  password: string,
  confirmPassword: string
): string | undefined => {
  if (password.length === 0 || confirmPassword.length === 0) {
    return "Please enter your passwords";
  }

  if (password !== confirmPassword) {
    return "Passwords must match";
  }

  if (password.length <= 5) {
    return "Passwords must be longer, at least 5 characters";
  }
  return undefined;
};
