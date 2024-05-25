export const Review = ({ review }) => {
  return (
    <div className="review">
      <div>
         { review.user ? `User: ${ review.user },` : '' } Review: { review.text ? review.text: 'no review yet'},  Rating: {review.rating ? review.rating : 'no rating'}
      </div>
    </div>
  );
};
