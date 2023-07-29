import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
};

export default App;
