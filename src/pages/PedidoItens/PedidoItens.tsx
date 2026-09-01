import axios from "axios";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./PedidoItens.module.css";
import Item from "./item";

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
    <div className={styles.container}>
      <div className={styles.backTextContainer}>
        <FaArrowLeft color="#CCC" />
        <span className={styles.backText}>Voltar para mesas</span>
      </div>

      <div className={styles.headerContainer}>
        <div>
          <h2>Mesa 01</h2>
          <span>Cliente: Joao da Silva</span>
        </div>
        <span>Pedido em aberto</span>
      </div>

      <div className={styles.itemsContainer}>
        <h3>Cardápio</h3>
        {itensCardapio.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
}

export default PedidosItens;
