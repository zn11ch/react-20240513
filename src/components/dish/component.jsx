import { Ingredients } from "../ingredients/component";

export const Dish = ({ dish }) => {
  return (
    <>
      <h4>{dish.name}</h4>
      <Ingredients ingredients={dish.ingredients} />
    </>
  );
};
