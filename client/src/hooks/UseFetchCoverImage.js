import { useState, useEffect } from "react";

const useFetchCoverImage = (isbn) => {
  // State to manage the cover image URL
  const [coverUrl, setCoverUrl] = useState("");

  // Effect to fetch the cover image when the ISBN changes
  useEffect(() => {
    if (!isbn) return; // If no ISBN is provided, exit early

    // Function to fetch the cover image from Open Library API
    const fetchCoverImage = async () => {
      const url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`; // URL to fetch cover image
      try {
        const response = await fetch(url); // Fetch the cover image
        if (response.ok) {
          setCoverUrl(url); // Update cover URL if the response is successful
        } else {
          console.error("Cover image not found:", url); // Log error if image is not found
        }
      } catch (error) {
        console.error("Error fetching the cover image:", error); // Log error if fetch fails
      }
    };

    fetchCoverImage(); // Call the fetch function
  }, [isbn]); // Dependency array to re-run effect when ISBN changes

  // Return the cover image URL
  return coverUrl;
};

export default useFetchCoverImage;
