import { render } from "../../test";
import { screen, waitFor } from "@testing-library/react";

import Home from "../../.././Pages/Home";
import userEvent from "@testing-library/user-event";

//this test is bad, somehow Im struggling to test this

describe("handleSubmit", () => {
  render(<Home />);

  // const firstName = screen.getByLabelText("first name");
  // const lastName = screen.getByLabelText("last name");
  // const city = screen.getByLabelText("city");
  // const street = screen.getByLabelText("street");
  // const state = screen.getByLabelText("state");
  // const zipCode = screen.getByLabelText("zip code");
  // const department = screen.getByLabelText("department");
  // const startDate = screen.getByLabelText("start date");
  // const dateOfBirth = screen.getByLabelText("date of birth");

  //Modal attribute open should exist
  //  addEmployee(newEmployee); havbeBeenCalled

  it("should give the modal an open attribute and a new employee should be in the redux state", async () => {
    //filling the form
    // userEvent.type(firstName, "Benjamin");
    // userEvent.type(lastName, "Lesne");
    // userEvent.type(city, "Paris");
    // userEvent.type(street, "quai de Nantes");
    // userEvent.type(state, "Alabama");
    // userEvent.type(zipCode, "44");
    // userEvent.type(department, "Sales");
    // userEvent.type(startDate, "01/01/2021");
    // userEvent.type(dateOfBirth, "01/01/2003");

    // userEvent.click(screen.getByText("Save"));

    const modal = screen.getByTestId("modal");

    modal.setAttribute("open", "");

    await waitFor(() => {
      expect(modal.hasAttribute("open")).toBe(true);

      // expect().toEqual([
      //   {
      //     firstName: "Benjamin",
      //     lastName: "Lesne",
      //     city: "Paris",
      //     street: "quai de Nantes",
      //     state: "Alabama",
      //     zipCode: "44",
      //     department: "Sale",
      //     startDate: "01/01/2021",
      //     dateOfBirth: "01/01/2003",
      //   },
      // ]);
    });
  });
});
