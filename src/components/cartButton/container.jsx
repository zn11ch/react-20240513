import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { CartButton } from "./component";

export const CartButtonContainer = () => {
  const count = useSelector(selectCartCount);

  return <CartButton count={count} />;
};
