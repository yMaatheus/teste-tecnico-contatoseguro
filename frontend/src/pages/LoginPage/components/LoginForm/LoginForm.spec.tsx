import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../../utils/renderWithRouter";
import { LoginForm } from "./LoginForm";

describe("Test Login Form", () => {
  it("Exibe as informações, labels e inputs", async () => {
    renderWithRouter(<LoginForm />);

    const welcome = screen.getByText(/e sejabem-vindo\(a\) à plataforma\./i);
    expect(welcome).toBeInTheDocument();

    const emailLabel = screen.getByText(/e-mail/i);
    expect(emailLabel).toBeInTheDocument();

    const emailInput = screen.getByRole("textbox", {
      name: /e-mail/i,
    });
    expect(emailInput).toBeInTheDocument();

    const passwordLabel = screen.getByText("Senha");
    expect(passwordLabel).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/senha/i);
    expect(passwordInput).toBeInTheDocument();

    const fogotPassword = screen.getByText(/esqueceu sua senha\?/i);
    expect(fogotPassword).toBeInTheDocument();

    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });
});
