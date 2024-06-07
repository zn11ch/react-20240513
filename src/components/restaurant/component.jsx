import { RestaurantContainer } from "./container";

export const Restaurant = ({ restaurantId }) => {

  return (
    <div className="restaurant">
      <h2>
        <a href="#"> {name}</a>
      </h2>
      <RestaurantContainer restaurantId={restaurantId}/>
    </div>
  );
};
