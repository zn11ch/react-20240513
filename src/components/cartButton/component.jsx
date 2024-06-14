import { useCallback, useState } from "react";
import { Button } from "../button/component";
import { Modal } from "../modal/component";
import { useUser } from "../../contexts/user/hooks";
import { CartContainer } from "../cart/container";

export const CartButton = ({ count }) => {
  const { user } = useUser();
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {user ? (
        <Button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Cart {count}
        </Button>
      ) : null}

      {isVisible ? (
        <Modal onClose={handleClose}>
          <CartContainer />
        </Modal>
      ) : null}
    </>
  );
};
