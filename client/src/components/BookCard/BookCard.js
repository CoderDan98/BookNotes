import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BookCard.css";
import { DeleteBook } from "../../services/Books";
import UseFetchCoverImage from "../../hooks/UseFetchCoverImage";
import EditBookModal from "./EditBookCard";

const BookCard = ({
  id,
  title,
  author,
  releaseDate,
  publisher,
  pageCount,
  description,
  notes,
  isbn,
  onDelete,
  refetch,
}) => {
  // Fetch the cover image URL using a custom hook
  const coverUrl = UseFetchCoverImage(isbn);
  // State to manage the visibility of the edit modal
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  // State to store the book details
  const [bookDetails, setBookDetails] = useState({
    id,
    title,
    author,
    releaseDate,
    publisher,
    pageCount,
    description,
    notes,
    isbn,
  });

  // Effect to add or remove the 'modal-open' class to the body when the modal is visible or hidden
  useEffect(() => {
    if (isEditModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isEditModalVisible]);

  // Handle delete action
  const handleDelete = async () => {
    try {
      await DeleteBook(id);
      if (onDelete) {
        onDelete();
      }
      refetch(); // Refetch the book list or data
    } catch (error) {
      console.error("Failed to delete the book:", error);
    }
  };

  // Handle edit button click
  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  // Handle modal close action
  const handleModalClose = () => {
    setEditModalVisible(false);
  };

  // Handle modal save action
  const handleModalSave = (updatedDetails) => {
    setBookDetails(updatedDetails); // Update book details
    setEditModalVisible(false); // Hide the modal
    refetch(); // Refetch the book list or data
  };

  return (
    <div className="book-card">
      <div>
        {/* Display cover image if available */}
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`${bookDetails.title} cover`}
            className="book-cover"
          />
        ) : (
          <p></p>
        )}
      </div>
      <div className="book-details">
        <h2>{bookDetails.title}</h2>
        <p>
          <strong>Author:</strong> {bookDetails.author}
        </p>
        <p>
          <strong>Release Date:</strong> {bookDetails.releaseDate}
        </p>
        <p>
          <strong>Publisher:</strong> {bookDetails.publisher}
        </p>
        <p>
          <strong>Page Count:</strong> {bookDetails.pageCount}
        </p>
        <p>
          <strong>Description:</strong> {bookDetails.description}
        </p>
        <p>
          <strong>Notes:</strong> {bookDetails.notes}
        </p>
        <div className="icon-container">
          {/* Edit and delete icons */}
          <i
            className="fas fa-pencil-alt edit-icon"
            onClick={handleEditClick}
          ></i>
          <i
            className="fas fa-trash-alt recycle-bin-icon"
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      {/* Edit book modal */}
      <EditBookModal
        show={isEditModalVisible}
        bookDetails={bookDetails}
        onClose={handleModalClose}
        onSave={handleModalSave}
        refetch={refetch}
      />
    </div>
  );
};

// PropTypes for component props validation
BookCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  pageCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string,
  isbn: PropTypes.string,
  onDelete: PropTypes.func,
  refetch: PropTypes.func.isRequired,
};

export default BookCard;
