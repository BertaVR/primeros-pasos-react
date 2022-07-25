// Función para crear el Store de la aplicación
// -- CreateStore -> crear Store
// -- applyMiddleware -> aplicar middleware entre ñas acciones y el reducer
// -- compose --> componer el store con el middleware y el devtools
import { createStore, applyMiddleware, compose } from "redux";
// Importamos el Root Reducer para dárselo al store de la aplicación
import rootReducer from "../reducers/rootReducer";
// Importamos ComposeWithDevTools para poder analizar el store de la app en el navegador
import { composeWithDevTools } from "redux-devtools-extension";
import { watcherSaga } from "../sagas/sagas";
import createSagaMiddleware from "redux-saga";

const store = createStore(rootReducer, composeWithDevTools());

// SAGAS -> nos traemos nuestro WatcherSaga para ponerlo a esuchar
export function createStoreWithSagaMiddleware() {
  const sagaMiddleware = createSagaMiddleware();

  // Crear nuestro Store añadiendo el SagaMiddleware
  let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
  );

  // Lanzamos el Saga 'watcherSaga' para que empiece a escuchar
  // las acciones asíncronas

  sagaMiddleware.run(watcherSaga);

  return store;
}
