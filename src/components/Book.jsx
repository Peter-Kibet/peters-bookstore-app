import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ bookId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books.find((book) => book.id === bookId));

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    // Dispatch the removeBook action to update the Redux store
    dispatch(removeBook(bookId));
    setIsDeleted(true);
  };

  return !isDeleted ? (
    <div className="books">
      <span>
        {book.title}
        {' '}
        -
        {book.author}
      </span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  ) : null;
};

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default Book;
