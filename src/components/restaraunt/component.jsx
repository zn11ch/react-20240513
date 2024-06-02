import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";

export const Restarunt = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <h2>
        <a href="#"> {restaurant.name}</a>
      </h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
