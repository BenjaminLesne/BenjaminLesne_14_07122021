import { createSlice } from "@reduxjs/toolkit";
/**
 * An objet storing all information about an employee
 * @typedef {object} employee
 * @property  {string} firstName
 * @property  {string} lastName
 * @property  {string} dateOfBirth
 * @property  {string} startDate
 * @property  {object} address
 * @property  {string} address.street
 * @property  {string} address.city
 * @property  {string} address.state
 * @property  {string} address.zip
 * @property  {string} department
 */

/**
 * create a slice for employees (see {@link https://redux-toolkit.js.org/api/createslice @reduxjs/toolkit})
 * @module employeesSlice
 */

const toRemoveWhenProjectDone = {
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

const employeesSlice = createSlice({
  name: "employees",
  initialState: [
    toRemoveWhenProjectDone,
    toRemoveWhenProjectDone,
    toRemoveWhenProjectDone,
  ],
  reducers: {
    /**
     * This is an action that add an employee to global redux state
     * @function addEmployee
     * @param {employee} action.payload
     */
    addEmployee(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = employeesSlice;

export const { addEmployee } = actions;
export default reducer;
