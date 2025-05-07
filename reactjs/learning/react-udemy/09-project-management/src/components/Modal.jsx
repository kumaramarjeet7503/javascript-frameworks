import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//  This is used to create a modal dailouge for popping over the screen
export default function Modal({ children, ref }) {
  const dialog = useRef();

  //  You can think it like an abstract method which will provide only the declared method to be executed
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  //   Here create portal is used to open the dialog on the modal-root id this can be access from anywhere
  return createPortal(
    <dialog ref={dialog}>
      {children}
      {/*  In order to close the modal the form method must send to dialog */}
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>,
    //  This is the root element which is in the index.html
    document.getElementById("modal-root")
  );
}
