import React from 'react';
// import { Web3Provider } from '@ethersproject/providers';
// import { useWeb3React } from '@web3-react/core';

import './App.css';

// import SimpleStorageContract from './contracts/SimpleStorage.json';

import { GlobalStyles } from './context/useTheme';

// import { useEagerConnect } from './context/useEagerConnect';
// import { getContractWithSigner } from './utils/getContract';

const App = () => {
  // const triedEager = useEagerConnect();
  // const { active, account, chainId, library, error } = useWeb3React();
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Hello, Ethereum World!</h1>
    </div>
  );
};

export default App;
