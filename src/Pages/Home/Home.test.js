import { screen } from "@testing-library/react";
import { render } from "../../utils/test";

import Home from "./";

describe("The Home component", () => {
  it("should render the first create employee form label associated to the first input", () => {
    render(<Home />);
    expect(screen.getByLabelText("First Name")).toBeTruthy();
  });

  it("should render title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        text: "HRnet",
      })
    ).toBeTruthy();
  });
});
