// Un componente que dispone de elementos hijo
import React from "react";

const MisChildren = (props) => {
  return (
    <div>
      <h2>Componente con Children</h2>
      <h2>Nombre: {props.nombre}</h2>
      {props.children}
      <h2>{/* Children del componente serán rederizados aquí */}</h2>
    </div>
  );
};

export default MisChildren;
