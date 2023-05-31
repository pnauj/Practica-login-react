import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <div className={styles.footer}>
          <b className={styles.error}>Error</b>
          <button>Login Button</button>
          <p>Crear Cuenta</p>
          <span>
            <Link to="/signup">Registrar</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
 