import './App.css';
import Bienvenida from './components/Bienvenida';
import Contador from './components/Contador';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">

      <h1 class="ejercicio">Ejercicio 1</h1>

        <Saludo nombre="Berta" apellido="Vergés"/>
        <hr/>

      <h1 class="ejercicio">Ejercicio 2</h1>

        <Contador/> 
        <hr/>

      <h1 class="ejercicio">Ejercicio 3</h1>
  
      <Bienvenida nombreUsuario="Berta"/>
    </div>
  );
}

export default App;
