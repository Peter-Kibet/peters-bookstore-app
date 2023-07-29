import React, { useState } from "react";
import PropTypes from "prop-types"; // Import prop-types
import "../styles/BookForm.css";

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "") {
      return;
    }

    const newBook = {
      id: Date.now(), // You can use a unique ID generator library for better ID generation
      title,
      author,
    };
    onAdd(newBook);
    setTitle("");
    setAuthor("");
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

// Add propTypes to validate the expected props
BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
