import { useState, useEffect } from "react";

const UseFetchCoverImage = (isbn) => {
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    if (isbn) {
      const url = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            setCoverUrl(url);
          } else {
            console.error("Cover image not found:", url);
          }
        })
        .catch((error) => {
          console.error("Error fetching the cover image:", error);
        });
    }
  }, [isbn]);

  return coverUrl;
};

export default UseFetchCoverImage;
