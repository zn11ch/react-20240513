import { CartItem } from "../cartItem/component";

export const Cart = ({ cartItems }) => {
  return (
    !!cartItems.lenth > 0 && (
      <div>
        <h3>Cart</h3>

        {Object.entries(cartItems).map(([dishId, dishCount]) => (
          <CartItem key={dishId} id={dishId} dishCount={dishCount} />
        ))}
      </div>
    )
  );
};
