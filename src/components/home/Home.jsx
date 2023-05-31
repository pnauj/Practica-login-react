import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link> 
        </h1>
        <br />
        <h1>
          <Link to="/signup">Registrar</Link>
        </h1>
      </div>
      <h3>{props.name ? `Bienvenido - ${props.name}` : "Iniciar Sesion"}</h3>
    </div>
  );
}
 