import './App.css';
import ListadoPersonas from './components/ListadoPersonas';

function App() {

  let listaPersonas = ['Berta', 'Pepito', 'Esther', 'Julia'];
  return (
    <div className="App">
      <h1> Ejercicio 1 (componentes children)</h1>
      <ListadoPersonas personas={listaPersonas} />
      <hr />
    </div>
  );
}

export default App;
