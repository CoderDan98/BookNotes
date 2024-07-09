import React, { useState, useEffect } from "react";
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
}) => {
  const coverUrl = UseFetchCoverImage(isbn);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
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

  useEffect(() => {
    if (isEditModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isEditModalVisible]);

  const handleDelete = async () => {
    try {
      await DeleteBook(id);
      if (onDelete) {
        onDelete();
      }
    } catch (error) {
      console.error("Failed to delete the book:", error);
    }
  };

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleModalClose = () => {
    setEditModalVisible(false);
  };

  const handleModalSave = (updatedDetails) => {
    // Here you would typically send the updated details to your server
    // For now, we'll just update the state
    setBookDetails(updatedDetails);
    setEditModalVisible(false);
  };

  return (
    <div className="book-card">
      <div>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`${bookDetails.title} cover`}
            className="book-cover"
          />
        ) : (
          <p>Cover not available</p>
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
          <strong>Descriptions:</strong> {bookDetails.description}
        </p>
        <p>
          <strong>Notes:</strong> {bookDetails.notes}
        </p>
        <div className="icon-container">
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
      <EditBookModal
        show={isEditModalVisible}
        bookDetails={bookDetails}
        onClose={handleModalClose}
        onSave={handleModalSave}
      />
    </div>
  );
};

export default BookCard;
