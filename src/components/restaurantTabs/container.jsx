import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurants/selectors";

export const RestaurantTabsContainer = ({ activeRestaurantId, onTabClick }) => {
  const restaurantsIds = useSelector(selectRestaurantIds);

  return (
    <RestaurantTabs
      restaurantsIds={restaurantsIds}
      activeRestaurantId={activeRestaurantId}
      onTabClick={onTabClick}
    />
  );
};
