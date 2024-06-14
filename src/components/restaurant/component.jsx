import { MenuContainer } from "../menu/container";
import { ReviewForm } from "../reviewForm/component";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurantName, restaurantId }) => {
  return (
    <div className="restaurant">
      <div>
        <h2>
          <a href="#"> {restaurantName}</a>
        </h2>

        <MenuContainer restaurantId={restaurantId} />
        <ReviewsContainer restaurantId={restaurantId} />
        <ReviewForm />
      </div>
    </div>
  );
};
