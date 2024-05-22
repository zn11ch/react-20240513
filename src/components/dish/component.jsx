import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";

export const Dish = ({ dish }) => {
  return (
    <>
      <h4>{dish.name}</h4>
      <Counter />
      <Ingredients ingredients={dish.ingredients} />
    </>
  );
};
