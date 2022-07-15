import React, { useState } from "react";

const ComponenteEventos = () => {
  const textoInicial = '';

  function manejarPulsacionesTeclado(e) {
    console.log(e)
    setTexto(texto + e.key);
  }

  function manejarDown(e){
    if(e.which === 8) setTexto(texto.slice(0, -1))
  };

  var [texto, setTexto] = useState(textoInicial);

  return (
    <div>
      <input type="text" onKeyDown={manejarDown} onKeyPress={manejarPulsacionesTeclado}></input>
      <p>{texto}</p>
    </div>
  );
};

export default ComponenteEventos;
