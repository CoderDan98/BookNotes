import { useState, useEffect } from "react";
import { FetchBooks } from "../services/Books";

const UseFetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetBooks = async () => {
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
    };

    GetBooks();
  }, []);

  return { books, loading, error };
};

export default UseFetchBooks;
