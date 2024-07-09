import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";
import UseFetchBooks from "./hooks/UseFetchBooks.js";
import { formatDate } from "./utils/FormatDate.js";

const App = () => {
  const { books, loading, error, refetch } = UseFetchBooks();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="book-list">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard
                  key={book.book_id}
                  id={book.book_id}
                  title={book.title}
                  author={book.author}
                  releaseDate={formatDate(book.release_date)}
                  publisher={book.publisher}
                  pageCount={book.page_count}
                  description={book.description}
                  notes={book.notes}
                  isbn={book.isbn_id}
                  onDelete={refetch}
                  refetch={refetch}
                />
              ))
            ) : (
              <p>No books found</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
