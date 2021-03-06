import React from 'react';
import './App.css';
import GitHubForkRibbon from "react-github-fork-ribbon";
//Import the Global Provider
import { GlobalProvider } from './context/GlobalState';

//Import Componets
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory'
import { AddTransaction } from './components/AddTransaction'
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <GitHubForkRibbon
          href="https://github.com/yasir-raza/expense-tracker-react-context-api"
          target="_blank"
          position="right"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
          <Balance/>
          <AccountSummary/>
          <TransactionHistory/>
          <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
