import { useCount } from "../../hooks/use-count"
import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";
import { useSelector } from "react-redux";

const initialValue = 0;

export const Dish = ({ disheId }) => {
  const {count, increment, decrement} = useCount(initialValue);
  const dish = useSelector((state) => state.dishes.entities[disheId]);

  return (
    <div>
      <h4>{dish.name}</h4>
      <Counter value={count} increment={increment} decrement={decrement} />
      <div>{count * dish.price}</div>
      <Ingredients ingredients={dish.ingredients} />
    </div>
  );
};
