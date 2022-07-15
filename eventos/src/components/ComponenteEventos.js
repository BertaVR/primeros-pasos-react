import React, { useState } from "react";

const ComponenteEventos = () => {
  const textoInicial = '';

  function manejarPulsacionesTeclado(e) {
    console.log(e)
    setTexto(texto + e.key);
  }

  function manejarDown(){};

  var [texto, setTexto] = useState(textoInicial);

  return (
    <div>
      <textArea onKeyDown={manejarDown} onKeyPress={manejarPulsacionesTeclado}></textArea>
      <p>{texto}</p>
    </div>
  );
};

export default ComponenteEventos;
