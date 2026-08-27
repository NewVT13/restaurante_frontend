import { FaDoorOpen } from "react-icons/fa";
import { GiWoodenChair } from "react-icons/gi";
import style from "./Mesas.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import stylesIndex from "../../index.module.css";
import { useNavigate } from "react-router";

const dados = getDataLocalStorage();

type Mesa = {
  id: number;
  nome: string;
  lugares: number | null;
  reservado: boolean;
  criado_em: string;
  atualizado_em: string;
};

function Mesas() {
  const navegate = useNavigate();
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [nomeCliente, setNomeCliente] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [mesaClicada, setMesaClicada] = useState<Mesa | null>(null);

  function abrirModal(mesa: Mesa) {
    setModalAberto(true);
    setMesaClicada(mesa);
  }
  function fecharModal() {
    setModalAberto(false);
  }

  async function criarPedido(e: React.SubmitEvent) {
    try {
      e.preventDefault();
      await axios.post(
        "http://localhost:8888/pedidos",
        {
          mesa_id: mesaClicada?.id,
          nome_cliente: nomeCliente,
          data: "2026-08-26",
        },
        {
          headers: {
            Authorization: "Bearen " + dados.token,
          },
        },
      );
      navegate("/pedido-itens");
    } catch (error) {
      alert(error.message);
    }
  }

  async function buscarMesas() {
    const response = await axios.get<Mesa[]>("http://localhost:8888/mesas", {
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
          <div
            key={mesa.id}
            className={style.chair}
            onClick={() => abrirModal(mesa)}
          >
            <div className={style.chairHeader}>
              <span>{mesa.reservado ? "Ocupado" : "Livre"}</span>
              <GiWoodenChair />
            </div>
            <h3>Mesa {mesa.nome}</h3>
            <span>{mesa.lugares} lugares</span>
          </div>
        ))}
      </div>
      <Dialog open={modalAberto} onClose={fecharModal} maxWidth="md">
        <form onSubmit={criarPedido}>
          <DialogTitle>Mesa {mesaClicada?.nome} </DialogTitle>
          <DialogContent>
            <p>Informe o nome do cliente para abrir o pedido</p>
            <div className={stylesIndex.containerInput}>
              <label>Nome do cliente</label>
              <input
                type="text"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                required
              />
            </div>
          </DialogContent>
          <DialogActions>
            <button type="submit">Criar pedido</button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
export default Mesas;
