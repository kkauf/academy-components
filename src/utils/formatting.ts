/**
 * Format a price value with currency symbol
 * @param value - The numerical value to format
 * @param currency - The currency symbol (default: '$')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns Formatted price string
 */
export const formatPrice = (
  value: number,
  currency: string = '$',
  locale: string = 'en-US'
): string => {
  return `${currency}${value.toLocaleString(locale)}`;
};

/**
 * Format a date using the specified locale and options
 * @param date - The date to format (Date object or ISO string)
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @param options - Intl.DateTimeFormatOptions object for customizing the format
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

/**
 * Truncate a string to the specified length and append an ellipsis
 * @param str - The string to truncate
 * @param maxLength - Maximum length before truncation (default: 100)
 * @param ellipsis - String to append after truncation (default: '...')
 * @returns Truncated string
 */
export const truncateText = (
  str: string,
  maxLength: number = 100,
  ellipsis: string = '...'
): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + ellipsis;
};

/**
 * Convert a string to title case
 * @param str - The string to convert
 * @returns Title-cased string
 */
export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
