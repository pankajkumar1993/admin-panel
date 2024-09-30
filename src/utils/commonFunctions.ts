// Capitalizes the first letter of each word in a string
function capitalizeWords(str: string): string {
  return str.split(' ')
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

// Replaces unwanted special characters with a space
function replaceSpecialCharFromString(str: string): string {
  if (!str) return str; // Return if the string is empty or null
  return str.replace(/[-\/!@#$%^&*(),.?":{}|<>]/g, ' '); // Replace unwanted characters with a space
  // return str.replace(/[-!@#$%^&*(),.?":{}|<>]/g, ' '); // Replace unwanted characters with a space
}

// Capitalizes the first letter of a string
function capitalize(str: string): string {
  if (!str) return str; // Return if the string is empty or null
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // Capitalize the first letter
}

// Combined function to sanitize and capitalize every word
function sanitizeAndCapitalize(pathname: string): string {
  const sanitizedString = replaceSpecialCharFromString(pathname); // Sanitize the input
  return capitalizeWords(sanitizedString); // Capitalize each word in the sanitized string
}

// Example usage
// const pathname = "/quotes-app! Welcome to @React#2024.";
// const result = sanitizeAndCapitalize(pathname);

// console.log(result); // Output: "Quotes App  Welcome To  React 2024"

// Export the functions to make the file a module
export { capitalize, capitalizeWords, replaceSpecialCharFromString, sanitizeAndCapitalize };
