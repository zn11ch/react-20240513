import { Review } from "../review/component";

export const Reviews = ({ reviews }) => {
  return (
    !!reviews?.length > 0 && (
      <div className="reviews">
        <h4> Reviews </h4>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
