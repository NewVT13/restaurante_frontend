import { Route, Routes, useLocation } from "react-router";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import Mesas from "./pages/Mesas/Mesas";
import PedidosItens from "./pages/PedidoItens/PedidoItens";
import Pedidos from "./pages/Pedidos/Pedidos";
import Chefs from "./pages/Chefes/Chefes";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/pedido-itens" element={<PedidosItens />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/chefes" element={<Chefs />} />
      </Routes>
    </>
  );
}

export default App;
