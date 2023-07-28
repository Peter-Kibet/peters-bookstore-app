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

// src/components/Book.js
import React from "react";

const Book = ({ book, onDeleteBook }) => {
  return (
    <div>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={() => onDeleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default Book;

// src/components/BookForm.js
import React, { useState } from "react";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime().toString(), // Generate a unique ID (for simplicity, we're using the timestamp as an ID)
      title,
      author,
      category,
    };
    onAddBook(newBook);
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
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
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
