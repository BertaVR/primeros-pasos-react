import logo from './logo.svg';
import './App.css';
import EjemploUseState from './components/hooks/Ejemplo1';
import EjemploOtrosHooks from './components/hooks/Ejemplo2';
import EjemploUseContext from './components/hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
          <h1 class="ejercicio">Ejercicio 1</h1>
          <EjemploUseState/>
          <hr/>
          <h1 class="ejercicio">Ejercicio 2</h1>
          <EjemploOtrosHooks/>
          <hr/>
          <h1 class="ejercicio">Ejercicio 3</h1>
          <EjemploUseContext/>
          <hr/>
    </div>
  );
}

export default App;
