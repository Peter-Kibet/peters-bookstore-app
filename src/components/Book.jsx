import React, { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types
import "../styles/Book.css";

const Book = ({ book }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    // Implement delete logic here, e.g., mark the book as deleted
    setIsDeleted(true);
  };

  return !isDeleted ? (
    <div className="books">
      <span>
        {book.title} - {book.author}
      </span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  ) : null;
};

// Add propTypes to validate the expected props
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
