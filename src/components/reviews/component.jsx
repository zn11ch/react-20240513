import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviews }) => {
  return (
    !!reviews?.length > 0 && (
      <div className="reviews">
        <h4> Reviews </h4>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
               <ReviewContainer review={review} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
