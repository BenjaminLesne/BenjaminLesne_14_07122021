import "../styles/Modal.css";
import React from "react";

import { ReactComponent as CheckLogo } from "../assets/check-solid.svg";

/**
 * A beautiful Success Modal Component
 * @module Modal
 * @param {string} props.textContent - text to display on the modal
 * @param {boolean} props.open - should the modal open ?
 * @param {object} props.setShouldModalOpen - function allowing to close the modal by clicking on "ok" button
 */

const Modal = ({ textContent, open, setShouldModalOpen }) => {
  return (
    <dialog className="Modal" id="modal" data-testid="modal" open={open}>
      <div className="Modal__content-wrapper modalbox success animate">
        <div className="Modal__icon icon">
          <CheckLogo />
        </div>
        <div className="Modal__text-content">
          <h1>Success!</h1>
          <p>{textContent}</p>
        </div>
        <button
          onClick={() => setShouldModalOpen(false)}
          type="button"
          className="Modal__ok-button redo btn"
        >
          Ok
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
