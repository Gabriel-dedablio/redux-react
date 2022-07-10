import React from "react";

export default function Aleatorio(props) {
  return (
    <>
      <p>valor Aleatorio entre { props.min } e { props.max } é: {parseInt(Math.random() * (props.max - props.min + 1) + props.min)}</p>
    </>
  )
}