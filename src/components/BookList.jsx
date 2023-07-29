import React from "react";
import Book from "../components/Book";
import "../styles/BookList.css";

const BookList = ({ books, onDelete }) => {
  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
