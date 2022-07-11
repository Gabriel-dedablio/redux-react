import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props;
  return (
    <>
      <h2><strong>Valor Minimo: </strong>{min}</h2>
      <h2><strong>Valor Maximo: </strong>{max}</h2>
      <h2><strong>Valor Escolhido: </strong>
      {parseInt(Math.random() * (props.max - props.min + 1) + props.min)}
      </h2>
    </>
  )
}