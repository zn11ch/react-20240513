import { useState } from "react";
import { RestaurantTabs } from "../restaurantTabs/component";
import { Restaurant } from "../restaurant/component";

export const Restaurants = () => {
  const [activeRestaurant, setActiveRestaurant] = useState();

  return (
    <div className="restaurants">
      <RestaurantTabs
        activeRestaurantId={activeRestaurant}
        onTabClick={setActiveRestaurant}
      />
      {activeRestaurant && <Restaurant restaurantId={activeRestaurant} />}
    </div>
  );
};
