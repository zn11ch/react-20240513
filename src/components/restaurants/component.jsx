import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabs } from "../restaurantTabs/component";

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
      <Restaurant restaurantId={activeRestaurantId} />
    </div>
  );
};
