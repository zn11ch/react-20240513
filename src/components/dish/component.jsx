import { useCount } from "../../hooks/use-count";
import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";

const initialValue = 0;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount(initialValue);
  return (
    <div>
      <h4>{dish.name}</h4>
      <Counter value={count} increment={increment} decrement={decrement} />
      <div>{count * dish.price}</div>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
