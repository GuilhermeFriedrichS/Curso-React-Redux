import React from 'react';

import Aletorio from './components/basicos/Aletorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aletorio'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={1} max={60} ></Aleatorio>
        <Fragmento/>
        <ComParametro
            titulo="Situação do Aluno"
            subtitulo="Pedro Silva" 
            nota={8.5} 
        />
        <Primeiro></Primeiro>
    </div>
);
