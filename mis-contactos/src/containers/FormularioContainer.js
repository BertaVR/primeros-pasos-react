import { connect } from "react-redux";
import { addContacto } from "../store/actions/actions";

// Importamos el formulario de Todos
import FormularioContacto from "../components/FormularioContacto";

const mapStateToProps = (state) => ({});

// Despacharemos la acción de tipo addTodo y se la asignaremos
// a la prop llamada 'submit' del componente TodoList
const mapDispatchToProps = (dispatch) => {
  return {
    submit: (nombre, email, empresa, teléfono, sector, apellidos) => {
      // Despacha la acción que actualiza el store
      dispatch(
        addContacto(nombre, email, empresa, teléfono, sector, apellidos)
      ); // LO QUE REALMENTE SE EJECUTA ES ESTO
    },
  };
};

const FormularioContactoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormularioContacto);

export default FormularioContactoContainer;
