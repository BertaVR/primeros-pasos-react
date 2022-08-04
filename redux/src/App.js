import "./App.css";
import React from "react";
import { connect } from "react-redux";
// Import para gestión de rutas:
import {
  Navigate ,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// Redirect --> Redirigir la ruta escogida
// Router  --> Es el alias que usamos para especificar un Stack de rutas
// Route --> Es el que usamos para declarar una ruta dentro de nuestro router.
/**
 * React crea aplicaciones SPA
 * Solo hay un index.html
 * El sistema de enrutado es simulado
 * para poder navegar entre vistas de componentes
 * que acrúan como páginas
 */
 import Home from "./pages/Home";
 import Login from "./pages/Login";
 import Profile from "./pages/Profile";




function App({logged}) {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={logged? <Profile /> : <Navigate  to='/login' replace={true} />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return  {
    logged: state.userState.logged
  }
}

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer;
