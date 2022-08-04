import React from "react";
// Nos traemos el useNavigate que es un hook
// para gestionar el stack de rutas de la aplicación
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();


  return (
    <div className="App">
      {/*<TodoFormContainer />
    <TodoFilterOptions/>
    <TodosContainer />*/}

      {/** EJEMPLO REDUX SAGA */}
      {/*<FormLoginReduxSagaContainer/>*/}
      <h1>Hola, esta es la home!</h1>
      <button onClick={() =>navigate('/profile')}> Perfil </button>

      <button onClick={() =>navigate('/login')}> Login </button>
    </div>
  );
}
