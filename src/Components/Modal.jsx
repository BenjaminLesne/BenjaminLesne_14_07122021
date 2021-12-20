import "../styles/Modal.css";
import React from "react";

import { ReactComponent as CheckLogo } from "../assets/check-solid.svg";

const Modal = () => {
  const closeModal = () => {
    document.getElementById("modal").removeAttribute("open");
  };
  return (
    <dialog className="Modal" id="modal" data-testid="modal">
      <div className="Modal__content-wrapper modalbox success animate">
        <div className="Modal__icon icon">
          <CheckLogo />
        </div>
        <div className="Modal__text-content">
          <h1>Success!</h1>
          <p>You added an employee</p>
        </div>
        <button
          onClick={closeModal}
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
