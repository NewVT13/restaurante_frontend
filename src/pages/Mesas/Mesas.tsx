import { FaDoorOpen } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import style from "./Mesas.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";

const dados = getDataLocalStorage();

type mesa = {
  id: number;
  nome: string;
  lugares: number | null;
  reservado: boolean;
  criado_em: string;
  atualizado_em: string;
};

function Mesas() {
  const [mesas, setMesas] = useState<mesa[]>([]);

  async function buscarMesas() {
    const response = await axios.get<mesa[]>("http://localhost:8888/mesas", {
      headers: {
        Authorization: "Bearen " + dados.token,
      },
    });

    setMesas(response.data);
  }

  useEffect(() => {
    buscarMesas();
  }, []);

  return (
    <div>
      <div className={style.containerMenu}>
        <div className={style.contentLeft}>
          <span className={style.logoMenu}>🍽️</span>
          <h1 className="{}">Sabor & Arte</h1>
          <ul>
            <li>Mesas</li>
            <li>Pedidos</li>
          </ul>
        </div>
        <div className={style.contentRight}>
          <span>{dados.role}</span>
          <span>
            <FaDoorOpen />
          </span>
        </div>
      </div>

      <h2>Mesas</h2>
      <p>Selecione uma mesa para abrir ou acompanhar um pedido</p>

      <div className={style.containerChairs}>
        {mesas.map((mesa) => (
          <div key={mesa.id} className={style.chair}>
            <div className={style.chairHeader}>
              <span>{mesa.reservado ? "Ocupado" : "Livre"}</span>
              <GiWoodenChair />
            </div>
            <h3>{mesa.nome}</h3>
            <span>{mesa.lugares} lugares</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Mesas;
