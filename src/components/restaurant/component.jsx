import {
  useCreateReviewMutation,
  useGetRestaurantsQuery,
} from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/selectors";
import { MenuContainer } from "../menu/container";
import { ReviewForm } from "../reviewForm/component";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({ restaurantId }) => {
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  const [createReview] = useCreateReviewMutation();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  const handleReviewSave = (form) => {
    createReview({
      restaurantId,
      newReview: {
        ...form,
        user: "adfadfadf",
      },
    });
  };

  return (
    <div className="restaurant">
      <div>
        <h2>
          <a href="#"> {restaurant.name}</a>
        </h2>

        <MenuContainer restaurantId={restaurantId} />
        <ReviewsContainer restaurantId={restaurantId} />
        <ReviewForm restaurant={restaurant} onClickSave={handleReviewSave} />
      </div>
    </div>
  );
};
