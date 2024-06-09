import { Review } from "../review/component";

export const Reviews = ({ reviewsIds }) => {
  return (
    !!reviewsIds?.length > 0 && (
      <div className="reviews">
        <h4> Reviews </h4>
        <ul>
          {reviewsIds.map((reviewId) => (
            <li key={reviewId}>
              <Review reviewId={reviewId} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
