import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/selectors";
import { CartItem } from "./component";

export const CartItemContainer = ({ dishId, dishCount }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return <CartItem dish={dish} dishCount={dishCount} />;
};
