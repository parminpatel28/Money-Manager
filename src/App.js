import React from 'react';
import './App.css';
import Header from './components/Header'
import Income from './components/Income'
import Invest from './components/Invest'
import Save from './components/Save'
import Spend from './components/Spend'


function App() {
  return (
    <div className="App">
      
      <Header />
      <Income />
      <Invest />
      <Save />
      <Spend />

       
        </div>
  )
  
  }

export default App;