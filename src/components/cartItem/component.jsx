export const CartItem = ({ dish, dishCount }) => {
  return (
    <div>
      <span>
        Dish: {dish.name} ({dishCount > 1 ? <span>{dishCount}x</span> : null})
      </span>{" "}
      - <span> Price: {dish.price * dishCount}$</span>
    </div>
  );
};
