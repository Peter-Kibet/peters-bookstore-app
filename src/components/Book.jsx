import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Book.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ itemId }) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books.find((book) => book.item_id === itemId));

  const handleDelete = () => {
    // Dispatch the removeBook action to update the Redux store
    dispatch(removeBook(itemId));
  };

  return (
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
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Book;
