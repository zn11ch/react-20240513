import { useSelector } from "react-redux";
import { Dishes } from "./component";

export const DishesContainer = ({ restaurantId }) => {
  const dishesIds = useSelector(
    (state) => state.restaurants.entities[restaurantId].menu,
  );

  return <Dishes dishesIds={dishesIds} />;
};
