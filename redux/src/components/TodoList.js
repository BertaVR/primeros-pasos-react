import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

/**
 *
 * @param {todos} arr
 * Lista de Todos que va a servit para iterar y pintar cada Todo
 * @param {onTodoClick} func
 * Un métdo que se pasará al componente Todo como prop y que vendrá
 * definida desde el TodosContainer. Se trata de una f que despachará
 * la ACCIÓN de tipo TOGGLE_TODO. Este coomportamiento lo va a recibir
 * el TodoList desde TodosContainer a travéd del método connect de redux
 */

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
    <h1> Mi lista de tareas</h1>
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo} //completed, id, text
          onClick={() => onTodoClick(todo.id)}
        ></Todo>
      ))}
    </ul>
    </div>
  );
};

/* Especificamos tipo y estructura de los proptypes del componente*/
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
