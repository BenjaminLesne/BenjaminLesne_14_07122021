/**
 * @function handleInputsErrorMessage
 * @param {Boolean} condition
 * @param {Object} input
 * @param {String} errorMessage
 * @returns {Boolean} - true if input got validated based on the condition given, false if not.
 */

function handleInputsErrorMessage(condition, input, errorMessage) {
  let errorMessageElement = document.getElementById(
    `${input.id + "__error-message"}`
  );
  // console.log("condition");
  // console.log(condition);
  // console.log("input.value");
  // console.log(input.value);
  // console.log(typeof input.value);
  if (condition) {
    input.setCustomValidity("");
    errorMessageElement?.remove();
    return true;
  }

  if (!errorMessageElement) {
    errorMessageElement = new DOMParser().parseFromString(
      `<p id=${input.id + "__error-message"} className="input__error-message">
          ${errorMessage}
        </p>`,
      "text/html"
    ).body.firstChild;
    input.after(errorMessageElement);

    input.setCustomValidity(errorMessage);
  }
  return false;
}

export default handleInputsErrorMessage;
