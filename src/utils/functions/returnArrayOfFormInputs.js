/**
 * Since inputs are stored in form.elements we loop through it to store all inputs in an array. Side note: the submit button is added to this elements list as last that's why we use length - 2 to not add it to our inputs array.
 * @function returnArrayOfFormInputs
 * @param {Number} length - the last element index you want to store. e.g: 9: <input id="randomInput" />
 * @param {Object} elements - findable in document.forms.yourForm.elements
 * @param {Array} currentArray - usally empty when we call this function for the first time. We store all inputs inside.
 * @returns {Array} - full of inputs elements
 */

const returnArrayOfFormInputs = async (
  lastElementIndex,
  elements,
  currentArray
) => {
  if (lastElementIndex >= 0) {
    currentArray.push(elements[lastElementIndex]);
    returnArrayOfFormInputs(lastElementIndex - 1, elements, currentArray);
  }
  return currentArray;
};

export default returnArrayOfFormInputs;
