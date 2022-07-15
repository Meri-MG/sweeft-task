import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import CardsList from './components/Cards/CardsList';
import DetailsPage from './components/Cards/DetailsPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<CardsList />} path="/" />
          <Route element={<DetailsPage />} path="/user/:id" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
