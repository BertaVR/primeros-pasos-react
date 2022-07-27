import React from "react";
import TodosContainer from "../containers/TodosContainer";
import TodoFormContainer from "../containers/TodoFormContainer";
import TodoFilterOptions from "../components/TodoFilterOptions";
import FormLoginReduxSagaContainer from "../containers/FormLoginReduxSagaContainer";
import { Route } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      {/*<TodoFormContainer />
    <TodoFilterOptions/>
    <TodosContainer />*/}

      {/** EJEMPLO REDUX SAGA */}
      {/*<FormLoginReduxSagaContainer/>*/}
      <h1>
           Hola!
        </h1>
    </div>
  );
}
