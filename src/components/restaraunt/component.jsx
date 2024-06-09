import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";
import { useSelector } from "react-redux";

export const Restarunt = ({ restaurantId }) => {
  const restaurant = useSelector((state) => state.restaraunts.entities[restaurantId]);

  if (!restaurant) {
    return null;
  }
  
  const { name, menu, reviews } = restaurant;

  return (
    <div className="restaurant">
      <h2>
        <a href="#"> {name}</a>
      </h2>
      <Menu dishesIds={menu} />
      <Reviews reviewsIds={reviews} />
      <ReviewForm />
    </div>
  );
};
