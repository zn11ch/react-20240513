import { Tab } from "../RestarauntTab/components";

export const RestaurantTabs = ({
  restaurantsIds,
  activeRestaurantId,
  onTabClick,
}) => {
  return (
    <div className="restaraunt-tabs">
      {restaurantsIds?.map((restaurantId) => (
        <Tab
          restaurantId={restaurantId}
          key={restaurantId}
          onClick={() => onTabClick(restaurantId)}
          className={activeRestaurantId === restaurantId ? "active" : null}
        />
      ))}
    </div>
  );
};
