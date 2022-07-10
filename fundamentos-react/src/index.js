import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const tag = <h1>Olá React</h1>;

ReactDOM.render(
  <div>
    { tag }
    <Primeiro />
    <ComParametro 
      titulo="Situação do Aluno"  
      aluno="Pedro"
      nota={9.3}
    />
  </div>,
  document.getElementById('root')
);