import { useSelector } from "react-redux";
import { selectCartModule } from "../../redux/ui/cart/selectors";
import { Cart } from "./component";

export const CartContainer = () => {
  const cartItems = useSelector((state) => selectCartModule(state));

  if (!cartItems) {
    return null;
  }

  return <Cart cartItems={cartItems} />;
};
