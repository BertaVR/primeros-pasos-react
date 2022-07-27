
import { connect } from "react-redux";
import FormLoginReduxSaga from "../components/FormLoginReduxSaga";
import { login } from "../store/actions/asyncActions";


const mapStateToProps = (state) => ({});

const mapDispatchToProps =(dispatch) => {
    return {
        onLogin: (email, password) => {
            dispatch(login(email, password))
        }
    }
};

const FormLoginReduxSagaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormLoginReduxSaga);

export default FormLoginReduxSagaContainer;
