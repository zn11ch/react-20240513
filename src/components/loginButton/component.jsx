import { Modal } from "../modal/component";
import { LoginForm } from "../loginForm/component";
import { useUser } from "../../contexts/user/hooks";
import { useCallback, useState } from "react";
import { Button } from "../button/component";

export const LoginButton = () => {
  const { user, setUser } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {user ? (
        <Button
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
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Login
        </Button>
      )}

      {isVisible ? (
        <Modal onClose={handleClose}>
          <LoginForm onClose={handleClose} />
        </Modal>
      ) : null}
    </>
  );
};
