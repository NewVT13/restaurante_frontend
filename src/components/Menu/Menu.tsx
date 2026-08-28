import { FaDoorOpen } from "react-icons/fa";
import { Link } from "react-router";
import style from "./Menu.module.css";
import { getDataLocalStorage } from "../../utils/getDataLocalStorage";

const dados = getDataLocalStorage();

function Menu() {
  return (
    <div className={style.containerMenu}>
      <div className={style.contentLeft}>
        <span className={style.logoMenu}>🍽️</span>
        <h1 className="{}">Sabor & Arte</h1>
        <ul>
          <Link to={"/mesas"}>
            <li>Mesas</li>
          </Link>
          <Link to={"/pedidos"}>
            <li>Pedidos</li>
          </Link>
          <Link to={"/chefes"}>
            <li>Chefes</li>
          </Link>
        </ul>
      </div>
      <div className={style.contentRight}>
        <span>{dados.role}</span>
        <span>
          <FaDoorOpen />
        </span>
      </div>
    </div>
  );
}
export default Menu;
