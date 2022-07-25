/**
 * Archivo donde especificar WATCHER SAGAS Y WORKER SAGAS
 *
 * * WATCHER SAGA
 * ________________________
 * función generadora que va a estar escuchando un tipo de acciones asíncronas
 * Cuando recibe una, pone a trabajar WORKER saga para que realice el trabajo
 * asíncrono
 *
 * * WORKER SAGA
 * ________________________
 * Función GENERADORA que recibe la ACCIÓN con su type y su Payload y se
 * encarga de ejecutar el proceso asíncrono
 * Cuando termina emite la accióbn que sí que escucha el REDUCER
 * asignado y entonces se actualiza el estado de la aplicación (estadi)
 *
 *
 */

import { takeLatest, call, put } from "redux-saga/effects";

// TakeLatest -> escuchar la última acción de un tipo concreti
// call -> llamar a una función desde el worker
// put -> despachar la acción nueva desde el worker saga

import axios from "axios";
// Acios es la librería para realizar peticiones HTTP.

export function* watcherSaga() {
  // Pone a trabajar al worker saga cuando escucha una acción de tipo
  // API_CALL_REQUEST
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

export function* workerSaga(action) {
  try {
    console.table(action);
    // Obtenemos la respuesta de la petición http
    const response = yield call(fetchHTTP(action.payload.request));
    // Obtenemos el token
    const token = response.data.token;
    // Despachamos una acción que viene determinada en la acción anterior
    // concretamente la OkAction
    yield put({
      type: action.payload.okAction,
      payload: token,
    });
  } catch (error) {
    yield put({
      type: action.payload.failAction,
      payload: error,
    });
  }
}

// Función que ejecuta la petición http y devuelve su resp
function fetchHTTP(request) {
  return function () {
    return axios(request);
  };
}
