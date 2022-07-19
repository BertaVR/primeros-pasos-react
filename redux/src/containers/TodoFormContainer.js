import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";

// Importamos la función para generar una acción de tipo 'TOGGLE_TODO'
import { addTodo } from "../store/actions/actions";

// Aquí asignamos la props 'todos' de todoList
// a partir de los datos del estado 'todosState'
// del STORE de la aplicación
const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (text) => {
      // Despacha la acción que actualiza el store
      dispatch(addTodo(text)); // LO QUE REALMENTE SE EJECUTA ES ESTO!!!
    },
  };
};

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFormContainer;
