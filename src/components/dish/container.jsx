import { useCallback } from "react";
import { Dish } from "./component";
import { useSelector } from "react-redux";
import { decrement, increment } from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import { selectDishCount } from "../../redux/ui/cart/selectors";

export const DishContainer = ({ dish }) => {
  const disheId = dish.id;

  const count = useSelector((state) => selectDishCount(state, disheId));

  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(increment(disheId)),
    [dispatch, disheId],
  );

  const handleDecrement = useCallback(
    () => dispatch(decrement(disheId)),
    [dispatch, disheId],
  );

  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};
