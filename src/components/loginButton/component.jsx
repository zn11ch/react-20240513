import { Modal } from "../modal/component";
import { LoginForm } from "../loginForm/component";
import { useUser } from "../../contexts/user/hooks";
import { useCallback, useState } from "react";

export const LoginButton = () => {
  const { user, setUser } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          <span
            style={{ color: "#01b070", fontSize: "18px", fontWeight: "bold" }}
          >
            {user}
          </span>{" "}
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Login
        </button>
      )}

      {isVisible ? (
        <Modal onClose={handleClose}>
          <LoginForm onClose={handleClose} />
        </Modal>
      ) : null}
    </>
  );
};
