import { RestaurantContainer } from "./container";

export const Restaurant = ({ restaurantId }) => {
  return (
    <div className="restaurant">
      <RestaurantContainer restaurantId={restaurantId} />
    </div>
  );
};
