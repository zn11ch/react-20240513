import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/reviews/selectors";
import { selectUserById } from "../../redux/entities/users/selectors";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  return <Review user={user} review={review} />;
};
