import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BookCard.css";
import { DeleteBook } from "../../services/Books";
import UseFetchCoverImage from "../../hooks/UseFetchCoverImage";

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

  return (
    <div className="book-card">
      <h2>{title}</h2>
      {coverUrl ? (
        <img src={coverUrl} alt={`${title} cover`} className="book-cover" />
      ) : (
        <p>Cover not available</p>
      )}
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Release Date:</strong> {releaseDate}
      </p>
      <p>
        <strong>Publisher:</strong> {publisher}
      </p>
      <p>
        <strong>Page Count:</strong> {pageCount}
      </p>
      <p>
        <strong>Descriptions:</strong> {description}
      </p>
      <p>
        <strong>Notes:</strong> {notes}
      </p>
      <div className="icon-container">
        <i className="fas fa-pencil-alt edit-icon"></i>
        <i
          className="fas fa-trash-alt recycle-bin-icon"
          onClick={handleDelete}
        ></i>
      </div>
    </div>
  );
};

export default BookCard;
