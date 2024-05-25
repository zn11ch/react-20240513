import { Tab } from "../tab/components";

export const RestaurantTabs = ({
  restaurants,
  activeRestaurantIndex,
  onTabClick,
}) => {
  return (
    <div>
      {restaurants.map((restaurant, restaurantIndex) => (
        <Tab
          key={restaurantIndex} // Add the key prop here
          title={restaurant.name}
          onClick={() => onTabClick(restaurantIndex)}
          className={
            activeRestaurantIndex === restaurantIndex ? "btn-active" : null
          }
        />
      ))}
    </div>
  );
};
