// F que devuelve una acción para gestión de asincronía en el store
export function login(userEmail, password) {
  return {
    // esta acción será capturada por el WATCHER saga
    type: "API_CALL_REQUEST",
    payload: {
      //Config para Axios en el worker saga
      request: {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'origin':'x-requested-with',
          'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
          'Content-Type': 'application/json',
      },
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
