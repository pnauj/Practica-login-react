import styles from "./SignUp.module.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";

export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Registro</h1>
        <InputControl
          label="Name"
          placeholder="Ingrese su nombre"
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <InputControl
          label="Email"
          placeholder="Ingrese su correo"
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />

        <InputControl
          label="Password"
          placeholder="Ingrese su contrasenia"
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              pass: e.target.value,
            }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={registro} disabled={submitButtonDisabled}>
            Guardar
          </button>
          <p>
            Si ya tienes cuenta inicia sesion
          </p>
          <span>
            <Link to='/login'>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
