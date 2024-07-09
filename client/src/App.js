import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";
import UseFetchBooks from "./hooks/UseFetchBooks.js";
import { formatDate } from "./utils/FormatDate.js";
import AddBookCard from "./components/BookCard/AddBookCard.js";

const App = () => {
  const { books, loading, error, refetch } = UseFetchBooks();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const handleAddSave = () => {
    setIsAddModalOpen(false);
    refetch();
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <div className="content">
        <div className="button-wrapper">
          <button className="add-book-button" onClick={handleAddButtonClick}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
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
      <AddBookCard
        show={isAddModalOpen}
        onClose={handleAddModalClose}
        onSave={handleAddSave}
        refetch={refetch}
      />
    </div>
  );
};

export default App;
