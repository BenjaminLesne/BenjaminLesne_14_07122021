import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * return children input JSX from an array of objects describing each child
 * @function generateFormChildren
 * @param {Array.<Object>} formChildrenArray - array full of object each of them reprente a form input child element
 */
const generateFormChildren = (formChildrenArray) => {
  return formChildrenArray.map((child) => {
    switch (child.element) {
      case "input":
        return (
          <React.Fragment key={child.id + "-fragment"}>
            <label htmlFor={child.id} className="createEmployee__label">
              {child.id}
            </label>
            <input
              className="createEmployee__input"
              type="text"
              id={child.id}
            />
          </React.Fragment>
        );
      case "DatePicker":
        return (
          <React.Fragment key={child.id + "-fragment"}>
            <label htmlFor={child.id} className="createEmployee__label">
              {child.id}
            </label>
            <DatePicker
              id={child.id}
              selected={child.selected}
              onChange={child.onChange}
              maxDate={child.maxDate}
            />
          </React.Fragment>
        );

      case "fieldset":
        return (
          <fieldset className="createEmployee__fieldset" key={child.id}>
            {generateFormChildren(child.childrenInputs)}
          </fieldset>
        );
      case "select":
        return (
          <select id={child.id} key={child.id}>
            {child.options.map((option) => {
              const optionValue =
                typeof option === "object" ? option.name : option;
              return <option key={optionValue}>{optionValue}</option>;
            })}
          </select>
        );

      default:
        console.log("unknown child element");
        return null;
    }
  });
};

export default generateFormChildren;
