import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      <User name="sifat" age={32}/>
    </div>
  );
}

export default App;
