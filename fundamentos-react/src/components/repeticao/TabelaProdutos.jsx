import React from "react";
import produtos from "../../data/produtos";

export default function TabelaProdutos(props) {
  const listaProdutos = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  }
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos}
        </tbody>
      </table>
    </div>
  );
}