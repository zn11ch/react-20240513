export const Review = ({ review }) => {
  return (
    <div className="review">
      <div>
        User: {review.user}, review: {review.text}, rating: {review.rating}
      </div>
    </div>
  );
};
