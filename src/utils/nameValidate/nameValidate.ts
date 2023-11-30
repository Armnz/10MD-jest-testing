export const nameValidate = (name: string): boolean => {
  const regex = /^[a-zA-Z]{2,50}$/;
  if (regex.test(name)) {
    return true;
  }
  return false;
};
