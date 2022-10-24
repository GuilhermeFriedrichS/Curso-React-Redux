import React from 'react';

import Card from './components/layout/Card';
import Aletorio from './components/basicos/Aletorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aletorio'

export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        
        <Card titulo='#04 - Exemplo de Card'>
            <Aleatorio min={1} max={60} ></Aleatorio>
        </Card>

        <Card titulo='#03 - Fragmento'>
            <Fragmento/>
        </Card>

        <Card titulo='#02 - Fragmento'>
            <ComParametro
                titulo="Situação do Aluno"
                subtitulo="Pedro Silva" 
                nota={8.5} 
            />
        </Card>
        
        <Card titulo='#01 - Primeiro Componente'>
            <Primeiro></Primeiro>
        </Card>

        
    </div>
);
