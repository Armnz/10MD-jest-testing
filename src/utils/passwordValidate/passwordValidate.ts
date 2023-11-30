export const passwordValidate = (password: string): boolean => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  const isCorrectLength = password.length >= 8;
  const noWhitespace = !/\s/.test(password);

  if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isCorrectLength && noWhitespace) {
    return true;
  }
  return false;
};
