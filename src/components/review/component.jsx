export const Review = ({ user, review }) => {
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
