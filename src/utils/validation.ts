/**
 * Validates if a string is a valid email address
 * @param email - The email string to validate
 * @returns Boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates if a string has a minimum length
 * @param str - The string to validate
 * @param minLength - The minimum required length
 * @returns Boolean indicating if the string meets the minimum length
 */
export const hasMinLength = (str: string, minLength: number): boolean => {
  return str.length >= minLength;
};

/**
 * Validates if a string contains at least one uppercase letter, one lowercase letter, and one number
 * @param str - The string to validate
 * @returns Boolean indicating if the string meets the password complexity requirements
 */
export const isStrongPassword = (str: string): boolean => {
  return (
    /[A-Z]/.test(str) && // has uppercase letter
    /[a-z]/.test(str) && // has lowercase letter
    /[0-9]/.test(str)    // has number
  );
};

/**
 * Validates if a string is a valid URL
 * @param url - The URL string to validate
 * @returns Boolean indicating if the URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Validates if a string is a valid phone number (simple validation)
 * @param phone - The phone string to validate
 * @returns Boolean indicating if the phone number is valid
 */
export const isValidPhone = (phone: string): boolean => {
  // This is a simple validation that checks if the string contains only digits, spaces, dashes, parentheses, and plus sign
  // and is at least 10 characters long
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};
