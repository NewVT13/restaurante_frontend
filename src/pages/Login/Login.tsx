import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Login.module.css";
import stylesIndex from "../../index.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  async function fazerLogin(event: React.SubmitEvent) {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:8888/auth/login", {
        email,
        senha: password,
      });

      localStorage.setItem("@dadosLogin", JSON.stringify(response.data));

      Swal.fire({
        icon: "success",
        title: "Bem-vindo ao sistema",
      });

      navegate("/mesas");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Erro ao entrar",
        text: error.response.data.error,
      });
    }
  }

  return (
    <form onSubmit={fazerLogin} className={styles.container}>
      <span className={styles.logo}>🍽️</span>
      <h1 className={styles.nome}>Sabor & Arte</h1>
      <p className={styles.subtitulo}>Acesse o painel do restaurante</p>
      <div className={styles.containerInput}>
        <div className={stylesIndex.containerInput}>
          <label>Email</label>
          <input
            placeholder="Seuemail@restaurante.com.br"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={stylesIndex.containerInput}>
          <label>Senha</label>
          <input
            placeholder="*******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
