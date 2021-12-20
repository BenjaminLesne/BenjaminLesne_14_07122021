import { screen } from "@testing-library/react";
import { render } from "../../utils/test/index.jsx";

import Home from "./";

describe("The Home component", () => {
  it("should render the first create employee form label associated to the first input", () => {
    render(<Home />);
    expect(screen.getByLabelText("first name")).toBeTruthy();
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
