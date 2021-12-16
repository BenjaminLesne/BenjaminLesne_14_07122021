import { screen } from "@testing-library/react";
import { render } from "../../utils/test";

import EmployeeList from "../EmployeesList";

describe("The EmployeeList component", () => {
  it("should render the link to home page", () => {
    render(<EmployeeList />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });

  it("should render title", () => {
    render(<EmployeeList />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        text: "Current Employees",
      })
    ).toBeTruthy();
  });
});
