import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

export const ReviewsContainer = ({ restaurantId }) => {
  const {
    data: reviews,
    isLoading,
    isFetching,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) {
    return <div>Loading ...</div>;
  }

  if (!reviews || !reviews.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
