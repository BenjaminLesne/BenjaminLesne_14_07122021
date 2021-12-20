import "../styles/DropdownMenu.css";

import { useState } from "react";
/**
 * DropdownMenu React Component
 * @module DropdownMenu
 * @param {object} props
 * @param {String}  props.options
 * @param {String}  props.id
 */

const DropdownMenu = ({ options, id }) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * @function handleClick - handle dropdown menus click on option and on the opening button. I tried my best to follow the functional programming paradigm.
   * @param {string} optionValue - option that got click by user
   * @param {string} setInputValue - give value to the state hidden input
   */
  const handleClick = (clickEvent, optionValue, updateInputWith) => {
    clickEvent.stopPropagation();

    const DropdownMenu = document.querySelector(`.DropdownMenu--${id}`);

    if (DropdownMenu.hasAttribute("open")) {
      DropdownMenu.removeAttribute("open");
    } else {
      DropdownMenu.setAttribute("open", "");
    }

    if (optionValue) {
      // stateInput.value = optionValue;
      updateInputWith(optionValue);
    }
  };
  return (
    <>
      <div className={`DropdownMenu DropdownMenu--${id}`}>
        <button
          type="button"
          className="DropdownMenu__button"
          onClick={handleClick}
        >
          {inputValue !== "" ? inputValue : `Click to select a ${id}`}
        </button>
        <ul className="DropdownMenu__options">
          {options.map((option) => {
            const optionValue =
              typeof option === "object" ? option.name : option;
            return (
              <li
                className="DropdownMenu__option"
                key={optionValue}
                onClick={(e) => handleClick(e, optionValue, setInputValue)}
              >
                {optionValue}
              </li>
            );
          })}
        </ul>
      </div>
      <input type="hidden" id={id} value={inputValue} data-testid={id} />
    </>
  );
};

export default DropdownMenu;
