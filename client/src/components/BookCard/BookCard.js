import React from "react";
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
    </div>
  );
};

export default BookCard;
