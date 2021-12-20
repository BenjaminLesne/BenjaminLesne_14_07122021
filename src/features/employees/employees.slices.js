import { createSlice } from "@reduxjs/toolkit";
/**
 * An objet storing all information about an employee
 * @typedef {object} employee
 * @property  {string} firstName
 * @property  {string} lastName
 * @property  {string} dateOfBirth
 * @property  {string} startDate
 * @property  {string} street
 * @property  {string} city
 * @property  {string} state
 * @property  {string} zipCode
 * @property  {string} department
 */

//used to change initial state -> testing purpose
const fakeEmployees = {
  firstName: "ben",
  lastName: "string",
  dateOfBirth: "string",
  startDate: "10/06/2003",
  street: "rue antoine",
  city: "string",
  state: "Alabama",
  zipCode: "10",
  department: "Sales",
};

/**
 * create a slice for employees (see {@link https://redux-toolkit.js.org/api/createslice @reduxjs/toolkit})
 * @module employeesSlice
 */

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
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
