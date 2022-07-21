// Función para crear el Store de la aplicación
import { createStore } from "redux";
// Importamos el Root Reducer para dárselo al store de la aplicación
import rootReducer from "../reducers/rootReducer";

// Importamos ComposeWithDevTools para poder analizar el store de la app en el navegador
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

// *TODO create store está deprecado, usar configureStore de @reduxjs/toolkit

export default store;