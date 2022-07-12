import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import CardsList from './components/Cards/CardsList';

const App = () => {
  // let [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   fetch(
  //     'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setUserData(data.list));
  // }, []);
  // console.log(userData, 'data');
  return (
    <div className="App">
      <Router>
        <Route element={<CardsList />} path="/" />
      </Router>
    </div>
  );
};

export default App;
