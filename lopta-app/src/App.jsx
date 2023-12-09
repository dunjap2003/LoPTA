import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AnalysisResults from './components/AnalysisResults';
import JourneyRoute from './components/JourneyRoute';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysisResults" element={<AnalysisResults />} />
          <Route path="/journeyRoute" element={<JourneyRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;