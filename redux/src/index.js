import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Nos traemos el STORE de la aplicación
import { createStoreWithSagaMiddleware } from './store/config/storeConfig';

// Nos traemos el PROVIDER de React Redux -> Muy parecido a cómo funcionaba el Hook useContext()
import { Provider } from 'react-redux'; // nos va a permitir pasar los datos del Store a la aplicación

// Creamos el Store de la aplicacción a partir de lo que nos devuelve
// la función que hemos creado 'createStoreWithSagaMiddleware'
let store = createStoreWithSagaMiddleware();

ReactDOM.render(
  <Provider store={store}>
    {/*  Aquí dentro ya estaría disponible el STORE de REDUX con el ROOTREDUCER ASOCIADO */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
