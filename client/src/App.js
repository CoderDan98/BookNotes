import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching the book data", error);
      }
    };

    fetchData();
  }, []);

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
