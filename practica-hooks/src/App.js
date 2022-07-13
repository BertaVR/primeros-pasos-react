import logo from './logo.svg';
import './App.css';
import EjemploUseState from './components/hooks/Ejemplo1';
import EjemploOtrosHooks from './components/hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
          <h1 class="ejercicio">Ejercicio 1</h1>
          <EjemploUseState/>
          <hr/>
          <h1 class="ejercicio">Ejercicio 2</h1>
          <EjemploOtrosHooks/>
          <hr/>
    </div>
  );
}

export default App;
