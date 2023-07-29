import React from "react";

const Book = ({ book, onDelete }) => {
  return (
    <div>
      <span>
        {book.title} - {book.author}
      </span>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
