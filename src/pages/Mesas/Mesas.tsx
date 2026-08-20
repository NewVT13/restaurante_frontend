import { FaDoorOpen } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import style from "./Mesas.module.css";
import { useEffect } from "react";
import axios from "axios";

function Mesas() {
  async function buscarMesas() {
    const response = await axios.get("http://localhost:8888/mesas", {
      headers: {
        Authorization: "Bearers ",
      },
    });
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
          <span>Funcionario</span>
          <span>
            <FaDoorOpen />
          </span>
        </div>
      </div>

      <h2>Mesas</h2>
      <p>Selecione uma mesa para abrir ou acompanhar um pedido</p>

      <div className={style.containerChairs}>
        <div className={style.chair}>
          <div className={style.chairHeader}>
            <span>Livre</span>
            <GiWoodenChair />
          </div>
          <h3>Mesa 01</h3>
          <span>3 lugares</span>
        </div>
      </div>
    </div>
  );
}

export default Mesas;
