import { useState } from "react";
import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";
const initialValue = 0;

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <h4>{dish.name}</h4>
      <Counter value={count} onChange={setCount} />
      {count * dish.price}
      <Ingredients ingredients={dish.ingredients} />
    </>
  );
};
