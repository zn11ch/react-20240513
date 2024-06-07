import { selectRestaurantById } from "../../redux/entities/restaurants/selectors";
import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h2>
        <a href="#"> {restaurant.name}</a>
      </h2>
      <Menu dishesIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
