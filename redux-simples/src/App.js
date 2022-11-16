import React, { useState } from 'react';
import './App.css';

import Interval from './components/Interval';
import Avarage from './components/Avarege';
import Sum from './components/Sum';
import DrawLots from './components/DrawLots';

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval min={min} max={max}
          onMinChanged={setMin} onMaxChanged={setMax}></Interval>
      </div>
      <div className="linha">
        <Avarage min={min} max={max}></Avarage>
        <Sum min={min} max={max}></Sum>
        <DrawLots min={min} max={max}></DrawLots>
      </div>  
    </div>
  );
}

export default App;
