import { useCallback, useState } from "react";
import { Button } from "../button/component"
import { Modal } from "../modal/component";
import { useUser } from "../../contexts/user/hooks";
import { Cart } from "../cart/component";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";

export const CartButton = () => {
    const { user } = useUser();
    const [isVisible, setIsVisible] = useState(false);
  
    const count = useSelector((state) => selectCartCount(state))

    const handleClose = useCallback(() => {
      setIsVisible(false);
    }, []);


  return (
    <>
      {user ? (
        <Button
          onClick={() => {
             setIsVisible(!isVisible)
          } }
        >

          Cart {count}
        </Button>
      ) : null}

      {isVisible ? (
        <Modal onClose={handleClose}>
         <Cart /> 
        </Modal>
      ) : null}
    </>
  );
}