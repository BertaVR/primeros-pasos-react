import React, { useState, Component } from "react";

const ComponenteEventosFuncion = () => {
  const textoInicial = "";

  function manejarPulsacionesTeclado(e) {
    console.log(e);
    setTexto(texto + e.key);
  }

  function manejarDown(e) {
    if (e.which === 8) setTexto(texto.slice(0, -1));
  }

  var [texto, setTexto] = useState(textoInicial);

  return (
    <div>
      <input
        type="text"
        onKeyDown={manejarDown}
        onKeyPress={manejarPulsacionesTeclado}
      ></input>
      <p>{texto}</p>
    </div>
  );
};

class ComponenteEventosClase extends Component {
  constructor(props) {
    super(props);
    this.state = { texto: "" };
  }
  manejaPulsacionTeclado = (e) => {
    console.log(e);
    let texto = this.state.texto + e.key;
    this.setState({ texto: texto });
  };
  manejarDown = (e) => {
    if (e.which === 8) {
      let textoActualizado = this.state.texto.slice(0, -1);
      this.setState({ texto: textoActualizado });
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onKeyDown={this.manejarDown}
          onKeyPress={this.manejaPulsacionTeclado}
        ></input>
        <p>{this.state.texto}</p>
      </div>
    );
  }
}

export { ComponenteEventosFuncion, ComponenteEventosClase };
