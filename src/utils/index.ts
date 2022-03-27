import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(RelativeTime);

export const dayJs = dayjs;

export const isEmpty = (item: string | number | Object | any[]): boolean => {
  // Test case for string input
	if (typeof item === "string") {
		return item.length === 0;
	}

  // Test case for object
  if (typeof item === "object") {
    // Mitigate for null type
    if (item) {
      // Test case for array
      if (Array.isArray(item)) {
        return item.length === 0;
      }

      // Test case for object {}
      const objectKeys = Object.keys(item);

      return objectKeys.length === 0;
    }
  }
  
  // Test case for any other type
  return !item
};

export const formatNumber = (number?: string | number): string => {
  const formatter = new Intl.NumberFormat(window.navigator.language);
  const value = Number(number);
  
  return formatter.format(Number.isNaN(value) ? 0 : value);
 }

export const formatNumberToShortString = (number?: string | number, options = {}): string => {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', ...options });
  
  const value = Number(number);

 return formatter.format(Number.isNaN(value) ? 0 : value);
};

