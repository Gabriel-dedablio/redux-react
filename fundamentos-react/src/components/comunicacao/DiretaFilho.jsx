export default function DiretaFilho(props) {
  return (
    <div>
      <div>{props.nome}</div>
      <div>{props.idade}</div>
      <div>{props.nerd ? 'Verdadeiro' : 'Falso'} !</div>
    </div>
  )
}