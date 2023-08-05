import React, { useState } from 'react';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import '../styles/Home.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="home">
      <h1>Bookstore</h1>

      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default HomePage;
