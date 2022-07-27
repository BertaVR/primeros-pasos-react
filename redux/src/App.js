import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoFilterOptions from "./components/TodoFilterOptions";
import FormLoginReduxSagaContainer from "./containers/FormLoginReduxSagaContainer";

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoFilterOptions/>
      <TodosContainer />

      {/** EJEMPLO REDUX SAGA */}
      <FormLoginReduxSagaContainer/>
    </div>
  );
}

export default App;
