import React, {useEffect, useState} from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {createPlayer} from './graphql/mutations';
import {listPlayers} from './graphql/queries';
import logo from './logo.svg';
import './App.css';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const initialState = {firstname: "", lastname: "", grade: "", nickname: ""};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
