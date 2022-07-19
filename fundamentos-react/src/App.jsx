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
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

import Card from './components/layout/Card';
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>


      <Card titulo="#10 - Comunicação Indireta" color="#312655">
       <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#10 - Comunicação Direta" color="#3e4ac9">
       <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#09 - Condicional" color="#0F1231">
        <UsuarioInfo usuario={{ nome: 'Gabriel'}}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: 'Gabri@el.com'}}></UsuarioInfo>
      </Card>

      <Card titulo="#08 - Condicional" color="#0F2312">
        <ParOuImpar numero={20}></ParOuImpar>
      </Card>

      <Card titulo="#07 - Lista Produtos" color="#F08710">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Lista Alunos" color="#F08910">
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