import { types } from "../types/types";

export const authReducer = (state, action) => {
  // creamos un reducer
  switch (
    action.type // si la accion es ...
  ) {
    case types.login: // login
      return {
        // devolvemos el state , el logged en verdadero y el usuario
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout: // en caso de logout
      return {
        // devolvemos logged en falso
        logged: false,
      };

    default:
      break;
  }
};
