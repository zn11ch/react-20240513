import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewsIds }) => {

  return (
    !!reviewsIds?.length > 0 && (
      <div className="reviews">
        <h4> Reviews </h4>
        <ul>
          {reviewsIds.map((reviewId) => (
            <li key={reviewId}>
              <ReviewContainer reviewId={reviewId} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
