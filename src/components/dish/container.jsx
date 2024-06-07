import { selectDishById } from "../../redux/entities/dishes/selectors";
import { Dish } from "./component";
import { useSelector } from "react-redux";

export const DishContainer = ({ disheId }) => {
  const dish = useSelector((state) => selectDishById(state, disheId));

  return <Dish dish={dish} />;
};
