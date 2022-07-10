import React from "react"
import './style.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default function App(props) {
  return (
    <div id="app">
      <Aleatorio min={1} max={100} />
      <h1>Fundamentos React (arrow) </h1>
      <Fragmento />
      <ComParametro 
        titulo="Situação do Aluno"  
        aluno="Pedro"
        nota={9.3}
      />
      <Primeiro />
    </div>
  )
}