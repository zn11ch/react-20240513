import { useState } from "react";
import { RestaurantTabs } from "../restaurantTabs/component";
import { RestaurantContainer } from "../restaurant/container";

export const Restaurants = ({ restaurantsIds }) => {
  const [activeRestaurantId, setActiveRestaurantIndex] = useState(
    restaurantsIds[0],
  );

  return (
    <div className="restaurants">
      <RestaurantTabs
        restaurantsIds={restaurantsIds}
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantIndex}
      />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};
