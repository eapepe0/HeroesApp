import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas a <AppRoute>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = { logged: false };
    render(
      <MemoryRouter initialEntries={"marvel"}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter></AppRouter>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getAllByText("Login").lenght).toBe(2);
  });

  test("debe mostrar Marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "abc",
        name: "JC",
      },
    };
    render(
      <MemoryRouter initialEntries={"/login"}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter></AppRouter>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText("DCPage")).toBeTruthy();
  });
});
