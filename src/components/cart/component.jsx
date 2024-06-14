import { CartItemContainer } from "../cartItem/container";

export const Cart = ({ cartItems }) => {
  return Object.keys(cartItems).length > 0 ? (
    <div>
      <h3>Cart</h3>

      {Object.entries(cartItems).map(([dishId, dishCount]) => (
        <CartItemContainer key={dishId} dishId={dishId} dishCount={dishCount} />
      ))}
    </div>
  ) : (
    <div>
      <h3>Cart</h3>
      <div>Cart is empty</div>
    </div>
  );
};
