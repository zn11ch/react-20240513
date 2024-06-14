import { useState } from "react";
import { ReviewForm } from "../reviewForm/component";
import { useEditReviewMutation } from "../../redux/service/api";
import { useUser } from "../../contexts/user/hooks";

export const Review = ({ review, userM }) => {
  const [editing, setIditing] = useState(false);

  const [editReview] = useEditReviewMutation();
  const { user } = useUser();

  console.log(user)
  const reviewId = review.id;

  const reviewForm = (
    <div className="review">
      <div key={review.id}>
        {userM ? `User: ${userM.name},` : ""} Review:{" "}
        {review.text ? review.text : "no review yet"}, Rating:{" "}
        {review.rating ? review.rating : "no rating"}
        { user ? <button onClick={() => setIditing(true)}>Edit</button> : null }
      </div>
    </div>
  );

  const handleReviewSave = (form) => {
    editReview({
      reviewId,
      review: {
        ...form,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
    setIditing(false);
  };

  return editing  ? (
    <ReviewForm
      initialValue={review}
      onClickSave={handleReviewSave}
      onClickCancel={() => setIditing(false)}
    />
  ) : (
    reviewForm
  );
};
