import { useSelector } from "react-redux";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => state.reviews.entities[reviewId]);
  const user = useSelector((state) => state.users.entities[review.userId]);

  return (
    <div className="review">
      <div>
        {user ? `User: ${user.name},` : ""} Review:{" "}
        {review.text ? review.text : "no review yet"}, Rating:{" "}
        {review.rating ? review.rating : "no rating"}
      </div>
    </div>
  );
};
