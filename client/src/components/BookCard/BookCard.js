import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./BookCard.css";

const BookCard = ({
  title,
  author,
  releaseDate,
  publisher,
  pageCount,
  description,
  notes,
}) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
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
        <i className="fas fa-trash-alt recycle-bin-icon"></i>
      </div>
    </div>
  );
};

export default BookCard;
