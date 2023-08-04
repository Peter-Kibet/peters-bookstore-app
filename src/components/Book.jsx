import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ itemId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books.find((book) => book.item_id === itemId));

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    // Dispatch the removeBook action to update the Redux store
    dispatch(removeBook(itemId));
    setIsDeleted(true);
  };

  if (!book) {
    // Book not found, handle the case gracefully
    return <div>Book not found.</div>;
  }

  return !isDeleted ? (
    <div className="books">
      <span>
        {book.title}
        {' '}
        -
        {book.author}
      </span>
      <span className="category">{book.category}</span>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  ) : null;
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Book;
