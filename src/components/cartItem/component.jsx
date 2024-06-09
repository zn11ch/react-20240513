export const CartItem = ({ dish, dishCount }) => {
  return (
    <div>
      {dish.name} - {dish.price * dishCount} - {dishCount}
    </div>
  );
};
