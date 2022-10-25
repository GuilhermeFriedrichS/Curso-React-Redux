import './App.css'
import React from 'react';
import Card from './components/layout/Card';
import Aletorio from './components/basicos/Aletorio';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Familia from './components/basicos/Familia';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aletorio'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>

            <Card titulo='#08 - Renderização Condicional' color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>

            <Card titulo='#07 - Desafio Repetição' color="#3A9AD4">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo='#06 - Repetição' color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#05 - Componente com Filhos' color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo='#04 - Exemplo de Card' color="#FA6900">
                <Aleatorio min={1} max={60} ></Aleatorio>
            </Card>

            <Card titulo='#03 - Fragmento' color="E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo='#02 - Fragmento' color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    subtitulo="Pedro Silva" 
                    nota={8.5} 
                />
            </Card>
            
            <Card titulo='#01 - Primeiro Componente' color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
                        
    </div>
);
