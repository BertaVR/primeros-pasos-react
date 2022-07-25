// F que devuelve una acción para gestión de asincronía en el store
export function logIn(userEmail, password) {
  return {
    // esta acción será capturada por el WATCHER saga
    type: "API_CALL_REQUEST",
    payload: {
      //Config para Axios en el worker saga
      request: {
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
            email: userEmail,
            password //password: password
        },
      },
      // acciones que despachará el WORKER SAGA cuando acabe la petición http
      okAction: 'API_CALL_SUCCESS',
      failAction: 'API_CALL_FAILURE',
    },
  };
}
