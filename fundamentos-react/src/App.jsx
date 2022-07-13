import React from "react"
import './style.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";

import Card from './components/layout/Card';

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>

      <Card title="#06 - Primeiro Componente" color="#F08910">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card title="#06 - Primeiro Componente" color="#F08910">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Familia" color="#5b0060">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#080">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#2c0ce3">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Primeiro Parametro" color="#e30c5c">
        <ComParametro 
          titulo="Situação do Aluno"  
          aluno="Pedro"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#e39d0c">
        <Primeiro />
      </Card>
    </div>
  )
}