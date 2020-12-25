import React from 'react';

import './App.css';

// import SimpleStorageContract from './contracts/SimpleStorage.json';

import { GlobalStyles } from './context/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Hello, Ethereum World!</h1>
    </div>
  );
};

export default App;
