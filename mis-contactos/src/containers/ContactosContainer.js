import { connect } from 'react-redux';
import { borrarContacto } from '../store/actions/actions';
import ContactoList from '../components/ContactoList';

/**
 * @param {array} todos 

 */



const mapStateToProps = (state) => {
    return {
        // Versión sin filtrar -> todos: state.todosState
        // Lista filtrada,
        contactos: state.contactosState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBorrarClick: (id) => {
            // Despacha la acción que actualiza el store
            dispatch(borrarContacto(id)); // LO QUE REALMENTE SE EJECUTA ES ESTO
        },
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoList)

export default TodosContainer;
