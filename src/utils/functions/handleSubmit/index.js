import handleFormValidation from "../handleFormValidation";
import returnArrayOfFormInputs from "../returnArrayOfFormInputs";

/**
 * Get all inputs in an array, give it to handleFormValidation which returns an array storing all validation results. Then, if all validation are a success, addEmployee to redux state.
 * @function handleSubmit
 * @param {Object} e
 * @param {Object} addEmployee - function that will add to redux state a given object that stores all the datas about an employee.
 */
const handleSubmit = async (e, addEmployee, setShouldModalOpen) => {
  e.preventDefault();

  const formLastInputIndex =
    document.forms["create-employee"].elements.length - 2;
  const formElements = document.forms["create-employee"].elements;

  const formInputsArray = await returnArrayOfFormInputs(
    formLastInputIndex,
    formElements,
    []
  ).then((rawInputsArray) =>
    rawInputsArray.filter(
      (input) => input.tagName === "SELECT" || input.tagName === "INPUT"
    )
  );

  try {
    //array.every() don't run on every element in formInputsArray I don't know why. So I use map and check if false is include in the array
    // const formValidation = handleFormValidation(formInputsArray); fonctionne pas :shrug:

    handleFormValidation(formInputsArray).then((formValidation) => {
      if (!formValidation.includes(false)) {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const street = document.getElementById("street").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipCode = document.getElementById("zip-code").value;
        const department = document.getElementById("department").value;
        const startDate = document.getElementById("start-date").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;

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

        addEmployee(newEmployee);
        setShouldModalOpen(true);

        // document.getElementById("modal").setAttribute("open", "");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export default handleSubmit;
