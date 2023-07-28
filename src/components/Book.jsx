// src/components/Book.js
import React from "react";

const Book = ({ book, onDeleteBook }) => {
  return (
    <div>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={() => onDeleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
