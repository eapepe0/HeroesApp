import { types } from "../../../src/auth/types/types";
import {} from "./";

describe("Pruebas en Types.s", () => {
  test("Debe de regresar estos types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
