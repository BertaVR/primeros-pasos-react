import './App.css';
import FormularioLoginFormik from './components/FormularioLoginFormik';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioRegistroFormik from './components/FormularioRegistroFormik';

function App() {
  return (
    <div className="App">
       <h1> Ejercicio 1 </h1>
      <FormularioRegistro />
      <hr />
      <h1> Ejercicio 2 </h1>
      <FormularioLoginFormik />
      <hr />
      <h1> Ejercicio 3 </h1>
      <FormularioRegistroFormik />
      <hr />
    </div>
  );
}

export default App;
