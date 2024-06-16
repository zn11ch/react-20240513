import { RestaurantTabs } from "../restaurantTabs/component";
import { Outlet } from "react-router-dom";

export const Restaurants = () => {
  return (
    <div className="restaurants">
      <RestaurantTabs />
      <Outlet />
    </div>
  );
};
