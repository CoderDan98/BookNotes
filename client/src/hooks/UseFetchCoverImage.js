import { useState, useEffect } from "react";

const useFetchCoverImage = (isbn) => {
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    if (!isbn) return;

    const fetchCoverImage = async () => {
      const url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          setCoverUrl(url);
        } else {
          console.error("Cover image not found:", url);
        }
      } catch (error) {
        console.error("Error fetching the cover image:", error);
      }
    };

    fetchCoverImage();
  }, [isbn]);

  return coverUrl;
};

export default useFetchCoverImage;
