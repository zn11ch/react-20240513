import { useState } from "react";
import { useSelector } from "react-redux";
import { RestaurantTabs } from "../restaurantTabs/component";
import { Restaurant } from "../restaurant/component";

export const RestaurantsContainer = () => {
  const restaurantsIds = useSelector((state) => state.restaurants.ids);

  const [activeRestaurantId, setActiveRestaurantIndex] = useState(
    restaurantsIds[0]
  );

  if (!restaurantsIds || !restaurantsIds?.length) {
    return null;
  }

  return (
    <>
      <RestaurantTabs
        restaurantsIds={restaurantsIds}
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantIndex}
      />
      <Restaurant restaurantId={activeRestaurantId} />
    </>
  );
};