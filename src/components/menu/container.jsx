import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDishesByRestaurantId } from "../../redux/entities/dishes/thunks/get-dishes-by-restaurant-id";
import { selectRestauranDishIds } from "../../redux/entities/restaurants/selectors";
import { useSelector } from "react-redux";
import { Menu } from "./component";

export const MenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const dishesIds = useSelector((state) =>
    selectRestauranDishIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!dishesIds) {
    return null;
  }

  return <Menu dishesIds={dishesIds} />;
};
