import React from "react";
import "../styles/Book.css";

const Book = ({ book, onDelete }) => {
  return (
    <div className="books">
      <span>
        {book.title} - {book.author}
      </span>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
