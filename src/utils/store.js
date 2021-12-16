import { configureStore } from "@reduxjs/toolkit";

import employeesReducer from "../features/employees/employees.slices";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
