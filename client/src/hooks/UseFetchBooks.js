import { useState, useEffect, useCallback } from "react";
import { FetchBooks } from "../services/Books";

const UseFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GetBooks = useCallback(async () => {
    setLoading(true);
    try {
      const data = await FetchBooks();
      setBooks(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching the book data", error);
      setError("Failed to fetch book data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    GetBooks();
  }, [GetBooks]);

  return { books, loading, error, refetch: GetBooks };
};

export default UseFetchBooks;
