// Función para crear el Store de la aplicación
import { configureStore } from "redux";
// Importamos el Root Reducer para dárselo al store de la aplicación
import rootReducer from "../reducers/rootReducer";

// Importamos ComposeWithDevTools para poder analizar el store de la app en el navegador
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(rootReducer, composeWithDevTools());


export default store;