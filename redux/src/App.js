import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoFilterOptions from "./components/TodoFilterOptions";

function App() {
  return (
    <div className="App">
      <TodoFormContainer />
      <TodoFilterOptions/>
      <TodosContainer />
    </div>
  );
}

export default App;
