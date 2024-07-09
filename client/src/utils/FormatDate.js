export const formatDate = (isoString) => {
  try {
    const date = new Date(isoString);
    if (isNaN(date)) {
      throw new Error("Invalid date");
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    throw error;
  }
};
