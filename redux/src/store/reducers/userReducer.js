const initialState = {
  fetching: false,
  token: null, // punto del store gestionado de forma asíncrona
  error: null, // punto del store gestionado de forma asíncrona
  logged: false, // punto del store gestionado de forma asíncrona
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "API_CALL_REQUEST":
      return {
        ...state,
        fetching: true,
        error: null,
        logged: false,
      };
    case "API_CALL_SUCCESS":
      return {
        ...state,
        fetching: false,
        error: null,
        logged: true,
        token: action.payload.token,
      };
    case "API_CALL_FAILURE":
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
        logged: false,
        token: null,
      };
    default:
      return state;
  }
}
