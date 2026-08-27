import axios from "axios";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";
import { useEffect, useState } from "react";

function PedidosItens() {
  const dados = getDataLocalStorage();

  const [itensCardapio, setItensCardapio] = useState([]);
  async function buscarItensCardapio() {
    const response = await axios.get("http://localhost:8888/cardaplios", {
      headers: {
        Authorization: `Bearen ${dados.token}`,
      },
    });

    setItensCardapio(response.data);
  }

  useEffect(() => {
    buscarItensCardapio();
  }, []);
  return (
    <div>
      {itensCardapio.map((itemcardapio) => (
        <ul>
          <li>{itemcardapio.nome}</li>
          <li>{itemcardapio.preco}</li>
        </ul>
      ))}
    </div>
  );
}

export default PedidosItens;
