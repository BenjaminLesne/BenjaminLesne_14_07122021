import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import employeesReducer from "../../features/employees/employees.slices";

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
/**
 * Allow to use a redux state made specially for testing
 * @function render
 */
export function render(
  ui,
  { preloadedState = { employees: [fakeEmployee] }, ...renderOptions } = {}
) {
  const store = configureStore({
    reducer: {
      employees: employeesReducer,
    },
    preloadedState,
  });

  function Wrapper({ children }) {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
