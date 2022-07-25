import { connect } from 'react-redux';

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


    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoList)

export default TodosContainer;
