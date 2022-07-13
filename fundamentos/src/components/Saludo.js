import React, { Component } from "react";

export default class Saludo extends Component {
  // Ésta es una clase para entender cómo funcionan las props
  render() {
    return (
      <div>
        Hola, {this.props.nombre} {this.props.apellido}
      </div>
    );
  }
}
