import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";

const App = () => {
  const books = [
    {
      title: "Book One",
      description: "This is the description for book one.",
      releaseDate: "2022-01-01",
      pageCount: 320,
    },
    {
      title: "Book Two",
      description: "This is the description for book two.",
      releaseDate: "2023-05-12",
      pageCount: 280,
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="content">
        <h1>Book List</h1>
        <div className="book-list">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              releaseDate={book.releaseDate}
              pageCount={book.pageCount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
