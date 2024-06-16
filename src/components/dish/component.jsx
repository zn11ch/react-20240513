import { NavLink } from "react-router-dom";
import { Counter } from "../counter/component";
import { Ingredients } from "../ingredients/component";

export const Dish = ({ dish, count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <NavLink to={`/dish/${dish.id}`}>
        {" "}
        <h4>{dish.name}</h4>{" "}
      </NavLink>
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
