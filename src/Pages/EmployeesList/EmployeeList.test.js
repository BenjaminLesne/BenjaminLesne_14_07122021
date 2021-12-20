import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/test/index.jsx";

import EmployeeList from "../EmployeesList";

const fakeEmployee = {
  firstName: "Benjamin",
  lastName: "Lesne",
  dateOfBirth: "07-08-1990",
  startDate: "08-08-1990",
  street: "antoine de jussieu",
  city: "Saint nazaire",
  state: "France",
  zipCode: 2,
  department: "Sale",
};

describe("The EmployeeList component", () => {
  it("should render the link to home page", () => {
    render(<EmployeeList />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/BenjaminLesne_14_07122021/"
    );
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

  it("should render employees", async () => {
    render(<EmployeeList />, {
      preloadedState: {
        employees: [
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
          fakeEmployee,
        ],
      },
    });

    //page 1
    const allStreetAdress = await screen.findAllByText("antoine de jussieu");
    expect(allStreetAdress.length).toBe(10);
    expect(
      await screen.findByText("Showing 1 to 10 of 11 entries")
    ).toBeInTheDocument();

    const nextPageButton = screen.getByText("Next");
    userEvent.click(nextPageButton);
    //page 2
    expect(
      await screen.findByText("Showing 11 to 11 of 11 entries")
    ).toBeInTheDocument();
  });
});
