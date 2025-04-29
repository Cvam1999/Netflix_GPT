export const checkValidateData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(
      password
    );

  if (!emailRegex) {
    return "Please enter a valid email address.";
  }
  if (!passwordRegex) {
    return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  return null;
};
