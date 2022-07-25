
import { connect } from 'react-redux';
import Contacto from "../components/Contacto";

import { borrarContacto } from '../store/actions/actions';

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

const ContactoContainer = connect(mapStateToProps, mapDispatchToProps)(Contacto)

export default ContactoContainer;
