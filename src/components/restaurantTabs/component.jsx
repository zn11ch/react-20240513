import { Tab } from "../tab/components";

export const RestaurantTabs = ({
  restaurants,
  activeRestaurantIndex,
  onTabClick,
}) => {
  return (
    <div className="restaraunt-tabs">
      {restaurants.map((restaurant, restaurantIndex) => (
        <Tab
          key={restaurantIndex} // Add the key prop here
          title={restaurant.name}
          onClick={() => onTabClick(restaurantIndex)}
          className={
            activeRestaurantIndex === restaurantIndex ? "active" : null
          }
        />
      ))}
    </div>
  );
};
