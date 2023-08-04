import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} bookId={book.id} />
      ))}
    </div>
  );
};

export default BookList;
