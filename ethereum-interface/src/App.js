import React, { useEffect, useState, useCallback } from 'react';
import { Web3Provider } from '@ethersproject/providers';
// import { useWeb3React } from '@web3-react/core';

import { formatFixed } from '@ethersproject/bignumber';

import './App.css';

import SimpleStorageContract from './contracts/SimpleStorage.json';

import { GlobalStyles } from './context/ThemeContext';

import { useEagerConnect } from './hooks/useEagerConnect';
import { getContract } from './utils/getContract';

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [numberFromStorage, setNumberFromStorage] = useState(null);

  useEagerConnect();
  // const { active, account, chainId, library, error } = useWeb3React();

  const contract = getContract(
    SimpleStorageContract.networks[5777].address,
    SimpleStorageContract.abi,
    new Web3Provider(window.ethereum).getSigner(),
  );

  const storeNumberToBlockchain = async () => {
    const tx = await contract.set(parseInt(inputVal));
    await tx.wait(1);
    setInputVal('');
    alert(`Nice: 🦄🦄🦄🦄🦄🌈🌈🌈🌈🌈🌈`);
  };

  const getNumberFromBlockchain = useCallback(async () => {
    const tx = await contract.get();
    setNumberFromStorage(parseInt(formatFixed(tx._hex)));
  }, [contract]);

  useEffect(() => {
    getNumberFromBlockchain();
  }, [getNumberFromBlockchain]);

  return (
    <div className="App">
      <GlobalStyles />
      <h1>Hello, Ethereum World!</h1>
      <h3 style={{ color: 'gray', fontWeight: '100' }}>
        Test out your Simple Storage Contract by storing a number to the blockchain.
      </h3>

      <div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          style={{
            borderRadius: '8px',
            border: '1px solid lightgray',
            marginBottom: '5px',
          }}
        />
      </div>
      <button
        onClick={storeNumberToBlockchain}
        style={{
          border: '1px solid #bada55',
          backgroundColor: '#bada55',
          padding: '5px 10px',
          borderRadius: '8px',
          marginTop: '5px',
        }}
      >
        <span role="img" aria-label="Rainbow Emoji">
          🌈
        </span>{' '}
        Submit
      </button>

      <p style={{ marginBottom: '20px' }}>
        {numberFromStorage ? (
          <>
            Your Number!{' '}
            <span role="img" aria-label="Party Popper Emoji">
              🎉🎉🎉🎉
            </span>
          </>
        ) : (
          <>
            Plzzz enter a number{' '}
            <span role="img" aria-label="Two Hearts Emoji">
              💕🥺
            </span>
          </>
        )}
      </p>
      {numberFromStorage && (
        <span
          style={{
            border: '1px solid pink',
            padding: '5px 10px',
            borderRadius: '8px',
            backgroundColor: 'pink',
          }}
        >
          {numberFromStorage}
        </span>
      )}
    </div>
  );
};

export default App;
