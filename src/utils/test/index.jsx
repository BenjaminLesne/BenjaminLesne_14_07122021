import { render as rtlRender } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import employeesReducer from "../../features/employees/employees.slices";
/**
 * Allow to use a redux state made specially for testing
 * @function render
 */
export function render(ui, options) {
  const store = configureStore({
    reducer: {
      employees: employeesReducer,
    },
  });

  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  }
  rtlRender(ui, { wrapper: Wrapper });
}
