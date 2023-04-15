import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("Test Login Page", () => {
  it("the title is visible", async () => {
    render(<LoginPage />);
    const result1 = await screen.findByText("Canal de Denúncias:");
    expect(result1).toBeInTheDocument();

    const result2 = await screen.findByText(
      "tecnologia que protege a integridade do seu negócio!"
    );
    expect(result2).toBeInTheDocument();
  });
});
