import { screen } from "@testing-library/react";
import { render } from "../../utils/test";

import Home from "./";

describe("The Home component", () => {
  it("should render the first create employee form label", () => {
    render(<Home />);
    expect(screen.getByText("/First Name/i")).toBeTruthy();
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
