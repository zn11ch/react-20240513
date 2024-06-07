import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = ({ activeRestaurantId, onTabClick }) => {
  const restaurantsIds = useSelector((state) => state.restaurants.ids);

  return (
    <RestaurantTabs
      restaurantsIds={restaurantsIds}
      activeRestaurantId={activeRestaurantId}
      onTabClick={onTabClick}
    />
  );
};
