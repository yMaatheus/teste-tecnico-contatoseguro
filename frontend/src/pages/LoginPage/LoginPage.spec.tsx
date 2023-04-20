import { fireEvent, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { renderWithRouter } from "../../utils/renderWithRouter";
import userEvent from "@testing-library/user-event";

describe("Test Login Page", () => {
  it("Exibe o texto sobre o canal denúncias", async () => {
    renderWithRouter(<LoginPage />);
    const result1 = await screen.findByText("Canal de Denúncias:");
    expect(result1).toBeInTheDocument();

    const result2 = await screen.findByText(
      "tecnologia que protege a integridade do seu negócio!"
    );
    expect(result2).toBeInTheDocument();
  });
});
