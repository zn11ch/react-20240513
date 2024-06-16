import { Reviews } from "./component";
import {
  useCreateReviewMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../redux/service/api";
import { useParams } from "react-router-dom";
import { ReviewForm } from "../reviewForm/component";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading,
    isFetching,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const [createReview] = useCreateReviewMutation();

  if (isLoading || isFetching) {
    return <div>Loading ...</div>;
  }

  if (!reviews || !reviews.length) {
    return null;
  }

  const handleReviewSave = (form) => {
    createReview({
      restaurantId,
      newReview: {
        ...form,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
  };

  return (
    <>
      <Reviews reviews={reviews} />
      <ReviewForm r onClickSave={handleReviewSave} />
    </>
  );
};
