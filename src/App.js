import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import Routes
import HomePage from "./pages/Home";
import Navigation from "./components/Navigation";
// Add other page components and route configurations as needed

const App = () => {
  return (
    <Router>
      <Navigation />
      <div>
        {/* Use the <Routes> element to wrap your route configurations */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
