import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";
import UseFetchBooks from "./hooks/UseFetchBooks.js";
import { formatDate } from "./utils/FormatDate.js";

const App = () => {
  const { books, loading, error, refetch } = UseFetchBooks();

  return (
    <div className="app">
      <Header />
      <div className="content">
        <h1>Book List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="book-list">
            {books.map((book) => (
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
                onDelete={refetch}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
