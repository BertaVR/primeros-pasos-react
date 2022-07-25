let contactosState = [];

const contactosReducer = (state = contactosState, action) => {
  switch (action.type) {
    case "ADD_CONTACTO":
      return [
        ...state,
        {
          id: action.payload.id,
          nombre: action.payload.nombre,
          email: action.payload.email,
          empresa: action.payload.empresa,
          teléfono: action.payload.teléfono,
          sector: action.payload.sector,
          apellidos: action.payload.apellidos,
        },
      ];
    case "BORRAR_CONTACTO":
      state = state.filter((c) => {
        return c.id !== action.payload.id;
      });

      return state;

    default:
      return state;
  }
};

export default contactosReducer;
