import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/Menu/Menu";

import "./index.module.css";
import "./styles/reset.css";

import Login from "./pages/Login/Login";
import Mesas from "./pages/Mesas/Mesas";
import PedidosItens from "./pages/PedidoItens/PedidoItens";
import Pedidos from "./pages/Pedidos/Pedidos";
import Chefs from "./pages/Chefes/Chefes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/pedido-itens" element={<PedidosItens />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/chefes" element={<Chefs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
