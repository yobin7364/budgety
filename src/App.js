import React from 'react';
import './App.css';
import {Budget} from './components/Budget';
import {AddAmount} from './components/AddAmount';
import {Income} from './components/Income';
import {Expenditure} from './components/Expenditure';
import {GlobalProvider} from './context/GlobalState';

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
    </div>
    </GlobalProvider>
  );
}

export default App;
