import { useSelector } from "react-redux";
import { selectCartModule } from "../../redux/ui/cart/selectors";
import { CartItem } from "../cartItem/component";

export const Cart = () => {
  const cartItems = useSelector((state) => selectCartModule(state));

  return (
    <div>
      <h3>Cart</h3>

      {Object.entries(cartItems).map(([key, value]) => (
        <CartItem key={key} item={key} value={value} />
      ))}
    </div>
  );
};
