import "./App.css";
import Bienvenida from "./components/Bienvenida";
import Contador from "./components/Contador";
import MisChildren from "./components/MisChildren";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="App">
      <h1 class="ejercicio">Ejercicio 1</h1>

      <Saludo nombre="Berta" apellido="Vergés" />
      <hr />

      <h1 class="ejercicio">Ejercicio 2</h1>

      <Contador />
      <hr />

      <h1 class="ejercicio">Ejercicio 3</h1>

      <Bienvenida nombreUsuario="Berta" />
      <hr />

      <h1 class="ejercicio">Ejercicio 4</h1>

      <MisChildren nombre="Berta">
        <h2> Apellido: Vergés</h2>
      </MisChildren>

      <MisChildren nombre="Berta" children="Mis hijos">
        <h2> Apellido: Vergés</h2>
      </MisChildren>

      <MisChildren
        nombre="Berta"
        children="Mis hijos" /* Evitar props llamadas children -> sobreescriben */
      ></MisChildren>
      <hr />
    </div>
  );
}

export default App;
