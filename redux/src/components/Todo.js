import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {onclicK} func
 * Método par cambiar la propiedad "completed del componente true - false"
 * @param {completed} bool
 * Valor booleano para vomprobar si el Todo está completo o no
 * True -> tachado
 * False -> No aparece tachado
 * Gestionará la clase css que se le aplica
 * @param {text} string
 * Texto/título del Todo para que sea renderizado en la vista
 * @param {id} num
 * Id del todo
 */

const Todo = ({ onClick, completed, text, id }) => {
  return (
    <li
      // El evento nativo onclick ejecutará la función pasada
      //a través de props desde el padre con el nombre "onClick"
      onClick= {onClick}
      style={{
        // un todo completado se mostrará tachado
        textDecoration: completed ? "line-through" : "none",
        textDecorationColor: completed ? "green" : "none",
        color: completed ? "#355E3B" : "black",
        backgroundColor : completed ? "#98FB98" : "white",
        fontWeight: completed ? "bolder" : "none",


      }}
    >
      {id} - {text}
    </li>
  );
};


/**Especificamos las verificaciones de los props del componente */
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Todo;
