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
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>

            <Card titulo='#12 - Componente Controlado (Input)' color="#E45F56   ">
                <Input/>
            </Card>

            <Card titulo='#11 - Comunicação Indireta' color="#8BAD39">
                <IndiretaPai/>
            </Card>

            <Card titulo='#10 - Comunicação Direta' color="#59323C">
                <DiretaPai/>
            </Card>


            <Card titulo='#09 - Renderização Condicional' color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}/>
                {/* <UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo/> */}
            </Card>

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
