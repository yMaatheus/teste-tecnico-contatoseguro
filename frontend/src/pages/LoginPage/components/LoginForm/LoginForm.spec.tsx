import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouter } from "../../../../utils/renderWithRouter";
import { LoginForm } from "./LoginForm";

describe("Test Login Form", () => {
  it("Exibe as informações, labels e inputs", async () => {
    renderWithRouter(<LoginForm />);

    const welcome = screen.getByText(/e sejabem-vindo\(a\) à plataforma\./i);

    const emailLabel = screen.getByText(/e-mail/i);

    const emailInput = screen.getByRole("textbox", {
      name: /e-mail/i,
    });

    const passwordLabel = screen.getByText("Senha");

    const passwordInput = screen.getByLabelText(/senha/i);

    const fogotPassword = screen.getByText(/esqueceu sua senha\?/i);

    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });

    expect(welcome).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(fogotPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it("Iterage com o formulário", async () => {
    renderWithRouter(<LoginForm />);

    const emailInput = screen.getByRole("textbox", {
      name: /e-mail/i,
    });
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/senha/i);
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    const email = "admin@gmail.com";
    const password = "secret_admin";

    fireEvent.change(emailInput, {
      target: { value: email },
    });

    fireEvent.change(passwordInput, {
      target: { value: password },
    });

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);

    loginButton.click();
  });
});
