import { useSelector } from "react-redux";
import { Restaurants } from "./component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurants/thunks/get-restaurants";
import { useEffect } from "react";
import { selectRestaurantIds } from "../../redux/entities/restaurants/selectors";

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantsIds = useSelector(selectRestaurantIds);

  if (!restaurantsIds || !restaurantsIds?.length) {
    return null;
  }

  return <Restaurants restaurantsIds={restaurantsIds} />;
};
