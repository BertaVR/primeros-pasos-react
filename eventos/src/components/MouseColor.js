import React, { useState } from "react";
import "./MouseColor.css";

export default function MouseColor() {
  const colorInicial = { red: 123, green: 234, blue: 221 };
  const stopColorInicial = false;

  const [stopColor, setStopColor] = useState(stopColorInicial);
  const [color, setColor] = useState(colorInicial);

  const manejoMovimientoRaton = (e) => {
    e.preventDefault();
    if (!stopColor) {
      setColor({
        red: e.clientX,
        green: e.clientY,
        blue: e.clientX,
      });
    }
    console.log(color);
  };
  return (
    <div
      onMouseMove={manejoMovimientoRaton}
      className="contenedor"
      style={{
        backgroundColor: `rgb(${color.red}, ${color.green},${color.blue})`,
      }}
    ></div>
  );
}
