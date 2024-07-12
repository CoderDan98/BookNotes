// Function to format an ISO date string into "DD/MM/YYYY" format
export const formatDate = (isoString) => {
  try {
    // Create a new Date object from the ISO string
    const date = new Date(isoString);

    // Check if the date is valid
    if (isNaN(date)) {
      throw new Error("Invalid date"); // Throw an error if the date is invalid
    }

    // Get the day, month, and year from the date object
    const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Pad month with leading zero if necessary (months are zero-based)
    const year = date.getFullYear(); // Get the full year

    // Return the formatted date string
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("Error formatting date:", error); // Log the error to the console
    throw error; // Rethrow the error to be handled by the caller
  }
};
