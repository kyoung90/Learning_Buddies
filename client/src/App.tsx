import React from "react";
import './App.css';
import userStore from './stores/userStore'
import {useContext} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home'
import Profile from './routes/Profile'
import Matched from './routes/Matched'


const App: React.FC = () => {
  const activityStore = useContext(userStore)
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/matched'>Matched Users</Link>
            </li>
          </ul>
        </nav>






        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/matched' component={Matched}/>

      </div>
    </Router>
  );
}

export default App;
