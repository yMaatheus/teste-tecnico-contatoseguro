import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./utils/renderWithRouter";
import { LoginPage } from "./pages/LoginPage";

describe("Simple working test", () => {
  it("the title is visible", () => {
    renderWithRouter(<LoginPage />);
    expect(screen.getByText("Canal de Denúncias:")).toBeInTheDocument();
  });

  // it("should increment count on click", async () => {
  //   render(<App />);
  //   const counter = screen.getByRole("button", { name: /count is/i });
  //   expect(counter.textContent).toBe("count is 0");
  //   await userEvent.click(counter);
  //   expect(counter.textContent).toBe("count is 1");
  // });
});
