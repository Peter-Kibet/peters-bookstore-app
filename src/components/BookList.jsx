// src/components/BookList.js
import React from "react";
import Book from "./Book";

const BookList = ({ books, onDeleteBook }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book key={book.id} book={book} onDeleteBook={onDeleteBook} />
      ))}
    </div>
  );
};

export default BookList;
