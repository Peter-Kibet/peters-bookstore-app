import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
      </div>
    </Router>
  );
}

export default App;
