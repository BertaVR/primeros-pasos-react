import React from 'react';
import PropTypes from 'prop-types';

// Creamos un componente que va a servie para crear Todos
// Éste recibirá por "props" la función a ejecutar en el submit
// del formulario. Este prop se llamará submit
const TodoForm = ({submit}) => {

    // Crear una referencia - asociado al input del formulario
    const todoText = React.createRef();

    return (
        <div>
            <h2> Crea tus nuevas tareas... </h2>
            <form onSubmit={
                (e) => {
                    e.preventDefault(); // evitamos que se recargue la página
                    submit(todoText.current.value); // ejecutamos la función de TodoFormContainer
                    todoText.current.value = '';
                }
            }>
                {/* Nuestro input para crear Todos */}
                <input type='text' ref={todoText} />
                <button type='submit'>Crear Tarea</button>
            </form>
        </div>
    );
};


TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default TodoForm;
