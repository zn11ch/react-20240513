import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({
  restaurantId,
  onClick,
  isActive,
  className,
}) => {
  const restaurant = useSelector(
    (state) => state.restaurants.entities[restaurantId],
  );
  return (
    <Tab
      title={restaurant.name}
      onClick={onClick}
      isActive={isActive}
      className={className}
    />
  );
};
