// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProblemList from './components/ProblemList';
import ProblemDetail from './components/ProblemDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProblemList />} />
        <Route path="/problems/:id" element={<ProblemDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
