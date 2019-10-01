import React from "react";
import logo from './logo.svg';
import './App.css';
import userStore from './stores/userStore'
import {useContext} from 'react'

const App: React.FC = () => {
  const activityStore = useContext(userStore)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{activityStore.title}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
