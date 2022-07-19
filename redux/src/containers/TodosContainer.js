import {connect} from 'react-redux';
// Usaremos TodoList oara conectarlo con el store de redux
// así este podrá leer los datos del store y gestionar los eventos
// de click para despachar la acción de actualizar estado del Todo
import TodoList from '../components/TodoList';
// Importamos la función para generar una acción de tipo 'TOGGLE_TODO'
import {toggleTodo} from '../store/actions/actions'


// Aquí asignamos la props 'todos' de todoList
// a partir de los datos del estado 'todosState'
// del STORE de la aplicación
const mapStateToProps = (state) => {
    return {
        todos: state.todosState
    }
}


// Despacharemos la ACCIÓN de tipo toggleTodo y se la asignaremos
// a la prop llamada 'onTodoClick' del componente TodoList
const mapDispatchToProps = (dispatch) =>{
    return {
        onTodoClick: (id) => {
            // Despacha la acción que actualiza el store
            dispatch(toggleTodo(id)) // LO QUE REALMENTE SE EJECUTA ES ESTO!!!
        }
    }
}


// Conectamos los datos del State con los Props del TodoList
// También conectamos la función de despachar acciones con las props del TodoList
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;
