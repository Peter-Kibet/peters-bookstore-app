import React from 'react';
// import PropTypes from 'prop-types'; // Import prop-types
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/BookList.css';

// const BookList = ({ books }) => (
//   <div className="bookList">
//     {books.map((book) => (
//       <Book key={book.id} book={book} />
//     ))}
//   </div>
// );

// // Add propTypes to validate the expected props
// BookList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

// export default BookList;

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="bookList">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
