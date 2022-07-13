import React, { useState } from "react";

/**
 * ? Vamos a crear un par de estilos, en vez de crearlas en hojas de estilos
 * ? Los crearemos como una constante en este archivo
 */

const loggedStyle = {
  color: "green",
};

const unloggedStyle = {
  color: "red",
  fontWeight: "bolder", // font-weight -> en JSX se pone en camelCase
};

export default function Bienvenida(props) {
  /**
   * useState -> Hook que permite definir una propiedad de estado priivado
   * además del método que se va a usar para modificarlo
   * además del valor inicial que va a tomar
   *
   * [variable del estado, método para mpdificar] = useState(valor por defecto);
   */

  const [logged, setLogged] = useState(false); // logged es falso por defecto

  return (
    <div
      style={logged ? loggedStyle : unloggedStyle} /* Conditional rendering */
    >
      <p> {logged ? `Hola, ${props.nombreUsuario} ` : "Inicie Sesión"}</p>
      <button
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Salir" : "Entrar"}
      </button>
    </div>
  );
}
