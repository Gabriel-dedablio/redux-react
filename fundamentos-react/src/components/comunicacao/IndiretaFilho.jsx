export default function IndiretaFilho(props) {
  return (
    <>
      <div>Filho</div>
      <button onClick={e =>props.quandoClicar('Gabriel', 28, true)}>
        Fornecer Informações
      </button>
    </>
  )
}