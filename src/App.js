import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import Routes
import HomePage from "./pages/Home";
import Navigation from "./components/Navigation";
import Categories from "./pages/Categories";
// Add other page components and route configurations as needed

const App = () => {
  return (
    <Router>
      <Navigation />
      <div>
        {/* Use the <Routes> element to wrap your route configurations */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="./pages/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
