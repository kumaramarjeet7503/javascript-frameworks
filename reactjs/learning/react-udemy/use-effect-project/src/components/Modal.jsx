import {useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ open, children, onCancel }) {
  const dialog = useRef();

  // here dependecies are those which can be changing as per the users action
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onCancel={onCancel}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
