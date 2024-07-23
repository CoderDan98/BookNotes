import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookCard from "./components/BookCard/BookCard";
import useFetchBooks from "./hooks/UseFetchBooks";
import { formatDate } from "./utils/FormatDate";
import AddBookCard from "./components/BookCard/AddBookCard";
import "./styles/theme.css";

const App = () => {
  // Fetch books data and manage loading and error states
  const { books, loading, error, refetch } = useFetchBooks();

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to manage the visibility of the add book modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter books based on the search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle click on the add book button
  const handleAddButtonClick = () => {
    setIsAddModalOpen(true);
  };

  // Handle closing of the add book modal
  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  // Handle saving a new book and refetch the books data
  const handleAddSave = () => {
    setIsAddModalOpen(false);
    refetch();
  };

  return (
    <div className="app">
      {/* Render the header component with search functionality */}
      <Header onSearch={handleSearch} />
      <div className="content">
        <div className="button-wrapper">
          {/* Render the add book button */}
          <button className="add-book-button" onClick={handleAddButtonClick}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {/* Display loading, error or book list based on state */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : filteredBooks.length > 0 ? (
          <div className="book-list">
            {filteredBooks.map((book) => (
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
            ))}
          </div>
        ) : (
          <p>No books found</p>
        )}
      </div>
      {/* Render the footer component */}
      <Footer />
      {/* Render the add book modal */}
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
