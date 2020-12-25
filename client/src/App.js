import React from 'react';
// import { useWeb3React } from '@web3-react/core';

import './App.css';

import { GlobalStyles } from './context/ThemeContext';

import { useEagerConnect } from './hooks/useEagerConnect';

const App = () => {
  useEagerConnect();
  // const { active, account, chainId, library, error } = useWeb3React();

  return (
    <div className="App">
      <GlobalStyles />
      <h1>Hello, Ethereum World!</h1>
    </div>
  );
};

export default App;
