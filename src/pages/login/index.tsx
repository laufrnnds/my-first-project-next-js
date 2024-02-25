import styles from "@/pages/login/styles.module.css";
import stylesDefault from "@/styles/styles.module.css";
import DefaultLayout from "../layout/default";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={stylesDefault.container} style={{ paddingTop: "24px" }}>
      <h2 className={stylesDefault.title}>Login</h2>
      <p className={stylesDefault.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.inputs}>
        <p className={styles.textinputs}>email</p>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className={styles.inputs}>
        <p className={styles.textinputs}>senha</p>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <button className={styles.button}>Entrar</button>
    </div>
  );
}

Login.getLayout = DefaultLayout;
