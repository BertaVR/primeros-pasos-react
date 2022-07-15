import "./App.css";
import {ComponenteEventosClase, ComponenteEventosFuncion} from "./components/ComponenteEventos";
import LoginControl from "./components/LogIn/LoginControl";
import Mensajes from "./components/Mensajes";

function App() {
  let mensajesNuevos = 50;
//let mensajesNuevos = 0;

  return (
    <div className="App">
      <h1> Ejercicio 1 (componentes children)</h1>
      <LoginControl />
      <hr />
      <h1> Ejercicio 2 (renderizado condicional)</h1>
      <Mensajes mensajesSinLeer={mensajesNuevos} />
      <hr />
      <h1> Ejercicio 3 (binding)</h1>
      <h2> Hecho como componente de función</h2>
      <ComponenteEventosFuncion />
      <h2> Hecho como componente de clase</h2>
      <ComponenteEventosClase/>
    </div>
  );
}

export default App;
