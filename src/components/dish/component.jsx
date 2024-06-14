import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";

export const Dish = ({ dish, count, handleIncrement, handleDecrement }) => {
  // const { count, increment, decrement } = useCount(initialValue);

  return (
    <div>
      <h4>{dish.name}</h4>
      <Counter
        value={count}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
      <div>{count * dish.price}</div>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
