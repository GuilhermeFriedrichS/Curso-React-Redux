import React from 'react';
import './App.css';

import Interval from './components/Interval';
import Avarage from './components/Avarege';
import Sum from './components/Sum';
import DrawLots from './components/DrawLots';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Avarage></Avarage>
        <Sum></Sum>
        <DrawLots></DrawLots>
      </div>  
    </div>
  );
}

export default App;
