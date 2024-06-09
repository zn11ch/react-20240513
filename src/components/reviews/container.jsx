import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/thunks/get-reviews-by-restaurant-id";
import { useSelector } from "react-redux";
import { selectRestauranReviewIds } from "../../redux/entities/restaurants/selectors";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewsIds = useSelector((state) =>
    selectRestauranReviewIds(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewsIds) {
    return null;
  }
  
  return (
    <Reviews reviewsIds={reviewsIds} />
  );
};
