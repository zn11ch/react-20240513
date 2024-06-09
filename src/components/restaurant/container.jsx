import { useDispatch } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selectors";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/users/thunks/get-users";

import { Restaurant } from "./component";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(restaurantId));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return null;
  }

  const restaurantName = restaurant.name;

  return (
    <Restaurant restaurantName={restaurantName} restaurantId={restaurantId} />
  );
};
