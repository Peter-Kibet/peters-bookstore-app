import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <div className="header">
    <Link to="/">Books</Link>
    <Link to="../pages/Categories.js">Categories</Link>
  </div>
);

export default Navigation;
