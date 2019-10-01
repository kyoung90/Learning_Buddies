import React from "react";
import logo from './logo.svg';
import './App.css';
import userStore from './stores/userStore'
import {useContext} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App: React.FC = () => {
  const activityStore = useContext(userStore)
  return (
    <Router>
      <div className="App">


      </div>
    </Router>
  );
}

export default App;
