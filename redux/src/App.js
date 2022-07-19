import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
