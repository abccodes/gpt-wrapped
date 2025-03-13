import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Tutorial from "./pages/Upload";
import Results from "./pages/Results";
import Loading from "./pages/Loading";
import Electric from "./pages/Electric";
import CO2 from "./pages/C02";
import Water from "./pages/Water";
import { LoadingProvider } from "./context/LoadingContext";
import { DataProvider } from "./context/DataContext";

const App: React.FC = () => {
  return (
    <Router>
      <LoadingProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/upload" element={<Tutorial />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/results" element={<Results />} />
            <Route path="/results/Electric" element={<Electric />} />
            <Route path="/results/C02" element={<CO2 />} />
            <Route path="/results/Water" element={<Water />} />
          </Routes>
        </DataProvider>
      </LoadingProvider>
    </Router>
  );
};

export default App;
