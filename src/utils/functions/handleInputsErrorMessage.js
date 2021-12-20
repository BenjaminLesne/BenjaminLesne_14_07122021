/**
 * @function handleInputsErrorMessage
 * @param {Boolean} condition
 * @param {Object} input
 * @param {String} errorMessage
 * @returns {Boolean} - true if input got validated based on the condition given, false if not.
 */

function handleInputsErrorMessage(condition, input, errorMessage) {
  let errorMessageElement = document.getElementById(
    `createEmployee__input-error-message--${input.id}`
  );

  if (condition) {
    input.setCustomValidity("");
    errorMessageElement?.remove();
    return true;
  }

  if (!errorMessageElement) {
    errorMessageElement = new DOMParser().parseFromString(
      `<p id="createEmployee__input-error-message--${input.id}" class="createEmployee__input-error-message">
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
