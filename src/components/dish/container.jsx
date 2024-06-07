import { Dish } from "./component";
import { useSelector } from "react-redux";

export const DishContainer = ({ disheId }) => {
  const dish = useSelector((state) => state.dishes.entities[disheId]);

  return <Dish dish={dish} />;
};
