import "../styles/CreateEmployeeForm.css";
import { DEPARTMENTS, STATES } from "../utils/data";
import generateFormChildren from "../utils/functions/generateFormChildren";
import handleSubmit from "../utils/functions/handleSubmit";

import Modal from "./Modal";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as employeesActions from "../features/employees/employees.slices";

import subYears from "date-fns/subYears";

/**
 * return create employee form. new employee cannot be younger than 18 years old and cannot start working a day that did not arrived yet
 * @module CreateEmployeeForm
 */

const CreateEmployeeForm = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const dispatch = useDispatch();

  const formChildren = [
    { element: "input", type: "text", id: "first-name" },
    { element: "input", type: "text", id: "last-name" },
    {
      element: "DatePicker",
      selected: dateOfBirth,
      onChange: (date) => setDateOfBirth(date),
      maxDate: subYears(new Date(), 18),
      id: "date-of-birth",
    },
    {
      element: "DatePicker",
      selected: startDate,
      onChange: (date) => setStartDate(date),
      maxDate: new Date(),
      id: "start-date",
    },
    {
      element: "fieldset",
      id: "createEmployeeFieldset",
      childrenInputs: [
        { element: "input", type: "text", id: "street" },
        { element: "input", type: "text", id: "city" },
        { element: "select", id: "state", options: STATES },
        { element: "input", type: "number", id: "zip-code" },
      ],
    },
    { element: "select", id: "department", options: DEPARTMENTS },
  ];

  return (
    <section className="createEmployee">
      <h2 className="createEmployee__heading">create an employee form</h2>
      <form action="#" id="create-employee" className="createEmployee__form">
        {generateFormChildren(formChildren)}

        <button
          className="createEmployee__submit-button"
          name="submit"
          type="submit"
          onClick={(e) =>
            handleSubmit(e, (newEmployee) =>
              dispatch(employeesActions.addEmployee(newEmployee))
            )
          }
        >
          Save
        </button>
      </form>
      <Modal />
    </section>
  );
};

export default CreateEmployeeForm;
