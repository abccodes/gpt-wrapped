import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Tutorial from "./pages/Upload";
import Results from "./pages/Results";
import Loading from "./pages/Loading";
import Electric from "./pages/Electric";
import C02 from "./pages/C02";
import Water from "./pages/Water";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<Tutorial />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/Electric" element={<Electric />} />
        <Route path="/results/C02" element={<C02 />} />
        <Route path="/results/Water" element={<Water />} />
      </Routes>
    </Router>
  );
};

export default App;
