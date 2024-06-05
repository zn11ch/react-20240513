import { createPortal } from "react-dom";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div id="modal" className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};
