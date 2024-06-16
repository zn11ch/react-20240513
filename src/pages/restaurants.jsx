import { useState } from "react";
import { RestaurantTabs } from "../components/restaurantTabs/component";
import { Outlet } from "react-router-dom";
export const RestaurantsPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState();

  return (
    <div className="restaurants">
      <RestaurantTabs
        activeRestaurantId={activeRestaurant}
        onTabClick={setActiveRestaurant}
      />
      <Outlet />
    </div>
  );
};
