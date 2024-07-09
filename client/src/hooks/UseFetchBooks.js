import { useState, useEffect, useCallback } from "react";
import { FetchBooks } from "../services/Books";

const useFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBooks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await FetchBooks();
      setBooks(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching the book data:", err);
      setError("Failed to fetch book data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return { books, loading, error, refetch: getBooks };
};

export default useFetchBooks;
