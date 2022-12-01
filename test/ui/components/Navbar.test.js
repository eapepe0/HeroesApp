import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";
import { AuthContext } from "../../src/auth/context/AuthContext";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas al componente <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "abc",
      name: "JC",
    },
    logout: jest.fn(),
  };
  beforeEach(() => jest.clearAllMocks());

  test("debe mostrar el nombre del usuario", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    screen.debug();
    expect(screen.getByText("JC")).toBeTruthy();
  });
  test("debe de llamar al logout y navigate cuando se hace click en el boton", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalled("/login", { replace: true });
  });
});
