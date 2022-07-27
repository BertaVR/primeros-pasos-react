import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import React from "react";
// Import para gestión de rutas:
import {
  Redirect,
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
