import axios from "axios";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";
import { useEffect, useState } from "react";

function PedidosItens() {
  const dados = getDataLocalStorage();

  type cardaplio = {
    id: number;
    nome: string;
    preco: string;
    tipo: string;
    porcoes: number;
    tamanho: "P" | "M" | "G";
    vegetariano: boolean;
    descricao: string | null;
    criado_em: string;
    atualizado_em: string;
  };

  const [itensCardapio, setItensCardapio] = useState<cardaplio[]>([]);
  async function buscarItensCardapio() {
    const response = await axios.get<cardaplio[]>(
      "http://localhost:8888/cardaplios",
      {
        headers: {
          Authorization: `Bearen ${dados.token}`,
        },
      },
    );

    setItensCardapio(response.data);
  }

  useEffect(() => {
    buscarItensCardapio();
  }, []);
  return (
    <div>
      {itensCardapio.map((itemcardapio) => (
        <ul key={itemcardapio.id}>
          <li>{itemcardapio.nome}</li>
          <li>{itemcardapio.preco}</li>
        </ul>
      ))}
    </div>
  );
}

export default PedidosItens;
