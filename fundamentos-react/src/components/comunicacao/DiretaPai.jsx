import DiretaFilho from "./DiretaFilho";


export default function DiretaPai() {
  return (
    <div>
      <DiretaFilho nome="Filho 1" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Filho 1" idade={20} nerd={false}></DiretaFilho>
    </div>
  )
}