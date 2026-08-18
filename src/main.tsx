import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import Login from "./pages/Login/Login";
import Mesas from "./pages/Mesas/Mesas";
import PedidosItens from "./pages/PedidoItens/PedidoItens";
import Pedidos from "./pages/Pedidos/Pedidos";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/pedido-items" element={<PedidosItens />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
