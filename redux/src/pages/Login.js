import React from "react";
import FormLoginReduxSagaContainer from "../containers/FormLoginReduxSagaContainer";

export default function Home() {
  return (
    <div className="App">
      {/*<TodoFormContainer />
    <TodoFilterOptions/>
    <TodosContainer />*/}

      {/** EJEMPLO REDUX SAGA */}
      {/*<FormLoginReduxSagaContainer/>*/}
      <h1>
           Página del login
        </h1>
        <FormLoginReduxSagaContainer/>
    </div>
  );
}
