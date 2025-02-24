import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Tutorial from "./pages/Tutorial";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </Router>
  );
};

export default App;
