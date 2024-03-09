import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { CeloAlfajoresTestnet } from "@thirdweb-dev/chains"; // make sure you import the testnet name 


import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider 
    activeChain={CeloAlfajoresTestnet} // make sure metamask is on celo Alfajores testnet
    clientId="05df97614128323f67280efed6e3613a" // Don't touch here>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)
