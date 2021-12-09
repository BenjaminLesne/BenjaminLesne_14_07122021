import "../styles/CreateEmployeeForm.css";

import { useDispatch } from "react-redux";
import * as employeesActions from "../features/employees/employees.slices";

/**
 *
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

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();

  /**
   * @function saveEmployee - add employee to redux global state
   *
   */
  const saveEmployee = (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const startDate = document.getElementById("start-date").value;
    const street = document.getElementById("start-date").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zip-code").value;
    const department = document.getElementById("department").value;

    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    dispatch(employeesActions.addEmployee(newEmployee));
  };
  return (
    <form action="#" id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input id="date-of-birth" type="text" />

      <label htmlFor="start-date">Start Date</label>
      <input id="start-date" type="text" />

      <fieldset className="address">
        <legend>Address</legend>

        <label htmlFor="street">Street</label>
        <input id="street" type="text" />

        <label htmlFor="city">City</label>
        <input id="city" type="text" />

        <label htmlFor="state">State</label>
        <select name="state" id="state"></select>

        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>

      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        <option>Sales</option>
        <option>Marketing</option>
        <option>Engineering</option>
        <option>Human Resources</option>
        <option>Legal</option>
      </select>
      <button type="submit" onClick={(e) => saveEmployee(e)}>
        Save
      </button>
    </form>
  );
};

export default CreateEmployeeForm;
