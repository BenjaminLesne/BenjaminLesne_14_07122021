import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = employeesSlice;

export const { addEmployee } = actions;
export default reducer;
