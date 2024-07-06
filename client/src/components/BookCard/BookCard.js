import React from "react";
import "./BookCard.css";

const BookCard = ({ title, description, releaseDate, pageCount }) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>Release Date:</strong> {releaseDate}
      </p>
      <p>
        <strong>Page Count:</strong> {pageCount}
      </p>
    </div>
  );
};

export default BookCard;
