import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import CardsList from './components/Cards/CardsList';
import DetailsPage from './components/User/DetailsPage';

const App = () => {
  let [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(
      'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20'
    )
      .then((response) => response.json())
      .then((data) => setUserData(data.list));
  }, []);
  console.log(userData, 'data');
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<CardsList data={userData} />} path="/" />
          <Route element={<DetailsPage />} path="/user/:id" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
