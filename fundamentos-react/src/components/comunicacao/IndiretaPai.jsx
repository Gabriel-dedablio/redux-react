import IndiretaFilho from "./IndiretaFilho";


export default function IndiretaPai() {

  function fornecerInformacoes(nome, idade, nerd) {
    console.log(`Nome: ${nome}`, `Idade: ${idade}`, `Nerd: ${nerd}`);
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}