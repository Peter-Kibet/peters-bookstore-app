import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/BookForm.css';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    // Dispatch the addBook action to update the Redux store
    dispatch(addBook(newBook));

    // Reset the form inputs after adding the book
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form-class" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
