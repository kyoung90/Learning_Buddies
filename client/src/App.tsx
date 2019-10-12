 import React, { useState, useEffect } from "react";
import './App.css';
import userStore from './stores/userStore'
import {useContext} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

import Home from './routes/Home'
import Profile from './routes/Profile'
import Matched from './routes/Matched'


const App: React.FC = () => {
  const activityStore = useContext(userStore)
  useEffect(() => {
    activityStore.loadUser();
  }, [activityStore])
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="navlink-active" to='/'>Home</NavLink>
            </li>
            <li>

              <NavLink exact activeClassName="navlink-active" to='/profile'>Profile</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="navlink-active" to='/matched'>Matched Users</NavLink>
            </li>
          </ul>
        </nav>




        <Switch>
          <Route exact path='/' render={() => <Home />}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/matched' component={Matched}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
