import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Nos traemos el STORE de la aplicación
import {createStoreWithSagaMiddleware} from "./store/config/storeConfig";
// Nos traemos el PROVIDER de React Reduux -> muy parecido al hook useContect()
import { Provider } from "react-redux";


// Creamos el store de la aplicación
// a partir de lo que nos devuelve la f 'createStoreWithSagaMiddleware'

let store = createStoreWithSagaMiddleware();

ReactDOM.render(
  <Provider store={store}>
  {/* Aquío dentro ya estaría disponible el STORE de REDUX con el ROOTREDUCER ASOCIADO*/}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
