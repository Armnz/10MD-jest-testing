export const eMailValidate = (email: string): boolean => {
  // Updated regex to allow for longer TLDs
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  if (regex.test(email)) {
    return true;
  }
  return false;
};
