import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";
import UseFetchBooks from "./hooks/UseFetchBooks.js";

const App = () => {
  const { books, loading, error } = UseFetchBooks();

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
            {books.map((book, index) => (
              <BookCard
                key={index}
                title={book.title}
                description={book.description}
                releaseDate={book.release_date}
                pageCount={book.page_count}
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
