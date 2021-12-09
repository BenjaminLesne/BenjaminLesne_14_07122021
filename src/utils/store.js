import { configureStore } from "@reduxjs/toolkit";

import employeesReducer from "../features/employees/employees.reducer";

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
