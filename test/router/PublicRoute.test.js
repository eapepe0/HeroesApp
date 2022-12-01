import { PublicRoute } from "../../src/router/PublicRoute";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";

describe("Pruebas en <PublicRoute />", () => {
  test("Si no esta autenticado debe mostrar el children", () => {
    // render(<PublicRoute />); // falla por que el componente usa el context y no lo tenemos en ningun lado
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    screen.debug(); // esto va a mostrar algo vacio por que no tenemos el navigate
    expect(screen.getByText("Ruta publica")).toBeTruthy();
  });

  test("debe navegar a Marvel  si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Coloso",
        id: "ABC123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
