export const isEmpty = (item: string | number | Object | any[]): boolean => {
  // Test case for string input
	if (typeof item === "string") {
		return !!item.length;
	}

  // Test case for object
  if (typeof item === "object") {
    // Mitigate for null type
    if (item) {
      // Test case for array
      if (Array.isArray(item)) {
        return !!item.length;
      }

      // Test case for object {}
      const objectKeys = Object.keys(item);

      return !!objectKeys.length;
    }
  }
  
  // Test case for any other type
  return !!item
};
