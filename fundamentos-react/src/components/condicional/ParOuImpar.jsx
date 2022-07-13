export default function ParOuImpar(props) {
  const isPar = props.numero % 2 === 0;
  return(
    <div>
      { isPar ? <p>Par</p> : <p>Impar</p> }
    </div>
  )
}