import styles from "./Login.module.css";
import stylesIndex from "../../index.module.css";
import { useState, type FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function fazerLogin(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      await axios.post("http://localhost:8888/auth/login", {
        email,
        senha: password,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao entrar",
        text: "Verifique seu email e senha e tente novamente.",
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
          />
        </div>

        <div className={stylesIndex.containerInput}>
          <label>Senha</label>
          <input
            placeholder="*******"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
