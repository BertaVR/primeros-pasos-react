import './App.css';
import Bienvenida from './components/Bienvenida';
//import Contador from './components/Contador';
//import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Saludo nombre="Berta" apellido="Vergés"/> */}
      {/* <Contador/> */}
      <Bienvenida nombreUsuario="Berta"/>
      </header>
    </div>
  );
}

export default App;
