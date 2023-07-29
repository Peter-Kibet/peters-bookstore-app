import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Books</Link>
      <Link to="/add">Categories</Link>
    </div>
  );
};

export default Navigation;
