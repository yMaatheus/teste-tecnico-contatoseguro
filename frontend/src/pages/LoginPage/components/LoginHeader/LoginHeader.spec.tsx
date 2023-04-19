import { render, screen } from "@testing-library/react";
import { LoginHeader } from "./LoginHeader";

describe("Test Login Header", () => {
  it("Exibe a logo", async () => {
    render(<LoginHeader />);

    const result = screen.getByAltText(/logo contato seguro/i);

    expect(result).toBeInTheDocument();
  });
});
