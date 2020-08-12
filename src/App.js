import React from 'react';
import './App.css';
import { Budget } from './components/Budget';
import { AddAmount } from './components/AddAmount';
import { Income } from './components/Income';
import { Expenditure } from './components/Expenditure';
import { GlobalProvider } from './context/GlobalState';
import { Chart } from './components/Chart';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Budget />
        <div className="bottom">
          <AddAmount />
          <div className="container clearfix">
            <Income />
            <Expenditure />
          </div>
        </div>
        <Chart />
      </div>
    </GlobalProvider>
  );
}

export default App;
