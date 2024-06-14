import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isLoading } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!reviews || !reviews.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
