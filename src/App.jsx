import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from './components/MainContent';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;
