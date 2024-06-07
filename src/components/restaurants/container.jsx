import { useSelector } from "react-redux";
import { Restaurants } from "./component";

export const RestaurantsContainer = () => {
  const restaurantsIds = useSelector((state) => state.restaurants.ids);

  if (!restaurantsIds || !restaurantsIds?.length) {
    return null;
  }

  return <Restaurants restaurantsIds={restaurantsIds} />;
};
