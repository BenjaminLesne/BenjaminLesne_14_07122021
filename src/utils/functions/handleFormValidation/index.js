import handleInputsErrorMessage from "../handleInputsErrorMessage";
import { STATES, DEPARTMENTS } from "../../data";

/**
 * Get an array of inputs and call handleInputsErrorMessage on each of them with as first arg, the condition to resolve, second the input element and the error message to display if the condition return false.
 * @function handleFormValidation
 * @param {Array} formInputsArray - full of inputs element
 * @returns {Array<Boolean>} - Array storing all condition result. The goal is to get this array to be full of trues to validate the user's inputs
 */

const handleFormValidation = async (formInputsArray) => {
  return formInputsArray.map((input) => {
    switch (input.id) {
      case "city":
      case "street":
      case "last-name":
      //fall through
      case "first-name":
        return handleInputsErrorMessage(
          typeof input.value === "string" && input.value.length > 0,
          input,
          "It must be a string"
        );
      case "zip-code":
        return handleInputsErrorMessage(
          typeof parseInt(input.value) === "number" &&
            parseInt(input.value) > 0,
          input,
          "It must be a Number greater than zero"
        );

      case "department":
        return handleInputsErrorMessage(
          DEPARTMENTS.includes(input.value),
          input,
          "Select a valid department option"
        );

      case "state":
        return handleInputsErrorMessage(
          STATES.filter((state) => state.name === input.value).length > 0,
          input,
          "Select a valid state option"
        );
      case "date-of-birth":
      case "start-date":
        const regularExpression = /^(\d{2}\/\d{2}\/\d{4})$/;
        return handleInputsErrorMessage(
          regularExpression.test(input.value),
          input,
          "It must be a date with mm-dd-yyyy format"
        );

      default:
        console.log("error: unknown input id");
        console.log(input.id);
        return false;
    }
  });
};
export default handleFormValidation;
