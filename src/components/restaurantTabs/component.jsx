import { RestaurantTabContainer } from "../restaurantTab/container";

export const RestaurantTabs = ({
  restaurantsIds,
  activeRestaurantId,
  onTabClick,
}) => {
  return (
    <div className="restaraunt-tabs">
      {restaurantsIds?.map((restaurantId) => (
        <RestaurantTabContainer
          restaurantId={restaurantId}
          key={restaurantId}
          onClick={() => onTabClick(restaurantId)}
          className={activeRestaurantId === restaurantId ? "active" : null}
        />
      ))}
    </div>
  );
};
