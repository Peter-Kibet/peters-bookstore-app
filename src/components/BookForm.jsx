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
      item_id: Date.now().toString(), // Make sure to use 'item_id' instead of 'id'
      title,
      author,
      category: 'Fiction', // You can set the category value here as well
    };

    // Dispatch the addBook action to update the Redux store
    dispatch(addBook(newBook));

    // Reset the form inputs after adding the book
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form-class" onSubmit={handleSubmit}>
      <h2 className="formHeader">Add a book</h2>
      <div className="formInputs">
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
      </div>
    </form>
  );
};

export default BookForm;
