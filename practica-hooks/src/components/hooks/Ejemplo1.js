// Ejemplo de componente que hace uso del hook useState()
import React, { useState } from "react";

function EjemploUseState() {
  // Valor inicial para un contador

  const valorInicial = 0;

  // Valor inicial para un usuario

  const usuarioInicial = {
    nombre: "Berta",
    email: "bertaverges@gmail.com",
  };

  // Sintaxis e inicialización de useState
  var [contador, setContador] = useState(valorInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);

  /* A partir de ahora vamos a hacer uso de setContador y setUsuario
   ** para modificar el estado (valor) del contador y del usuario respectivamente
   */

  function incrementar() {
    // CLOSURE
    // aumentar el contador en 1
    setContador(++contador);
    console.log("Contador actual", contador);
  }

  function actualizarUsuario() {
    //Hacer uso de setUsuario para actualizarlo
    const nuevoUsuario = {
      nombre: "Pepito",
      email: "pepito@gmail.com",
    };
    setUsuario(nuevoUsuario);
  }
  return (
    <div>
      <h2> ***** EJEMPLO HOOK USESTATE() *****</h2>
      <h3> Contador {contador}</h3>
      <h3> Datos del usuario:</h3>
      <h4>Nombre:{usuario.nombre}</h4>
      <h4>Email: {usuario.email}</h4>

      {/*Evento onclick que llama a las funciones*/}
      <button onClick={incrementar}> Incrementar Contador</button>
      <button onClick={actualizarUsuario}> Actualizar Usuario</button>
    </div>
  );
}

export default EjemploUseState;
