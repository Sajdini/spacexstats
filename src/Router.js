import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./components/Launch";
import Launches from "./components/Launches";

export default () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Launches />} />
        <Route path="/launch/:flight_number" element={<Launch />} />
      </Routes>
    </Router>
  );
};
