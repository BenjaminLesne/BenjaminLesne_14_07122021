import "../styles/Modal.css";

const Modal = () => {
  const closeModal = () => {
    document.getElementById("modal").removeAttribute("open");
  };
  return (
    <dialog className="Modal" id="modal">
      <div className="Modal__content-wrapper">
        <span className="Modal__message">Employee Created!</span>
        <button onClick={closeModal} className="Modal__close-button"></button>
      </div>
    </dialog>
  );
};

export default Modal;
