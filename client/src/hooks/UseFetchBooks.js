import { useState, useEffect, useCallback } from "react";
import { FetchBooks } from "../services/Books";

const useFetchBooks = () => {
  // State to manage the list of books
  const [books, setBooks] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage error messages
  const [error, setError] = useState(null);

  // Function to fetch books from the server
  const getBooks = useCallback(async () => {
    setLoading(true); // Set loading to true before starting fetch
    try {
      const data = await FetchBooks(); // Fetch books from the API
      setBooks(data); // Update books state with fetched data
      setError(null); // Clear any previous error
    } catch (err) {
      console.error("Error fetching the book data:", err);
      setError("Failed to fetch book data. Please try again later."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  }, []);

  // Effect to fetch books when the component mounts
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  // Return books, loading status, error message, and refetch function
  return { books, loading, error, refetch: getBooks };
};

export default useFetchBooks;
