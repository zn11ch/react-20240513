import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => state.restaurants.entities[restaurantId],
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>
        <a href="#"> {restaurant.name}</a>
      </h2>
      <Menu restaurantId={restaurantId} />
      <Reviews />
      <ReviewForm />
    </div>
  );
};
