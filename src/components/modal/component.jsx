import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../../contexts/modal";

export const Modal = ({ children, setIsVisible }) => {
  const overlayRef = useRef(null);

  const closeModal = () => {
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const overlay = overlayRef.current;

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        overlay.style.display = "none";
        setIsVisible(false);
      }
    });

    return () => {
      overlay.removeEventListener("click", (event) => {
        if (event.target === overlay) {
          overlay.style.display = "none";
          setIsVisible(false);
        }
      });
    };
  }, [setIsVisible]);

  return (
    <>
      {createPortal(
        <ModalContext.Provider value={{ closeModal }}>
          <div className="overlay" ref={overlayRef}>
            <div id="modal" className="modal">
              <div className="modal-content">{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        document.getElementById("modal-root")
      )}
    </>
  );
};
