import { Review } from "./component";
import { useGetUsersQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/selectors";
import { useState } from "react";
import { useEditReviewMutation } from "../../redux/service/api";

export const ReviewContainer = ({ review }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectEntityFromResult(review.userId),
  });

  const [editing, setEditing] = useState(false);

  const [editReview] = useEditReviewMutation();

  const reviewId = review.id;

  const handleReviewCancel = () => setEditing(false);

  const handleReviewSave = (form) => {
    editReview({
      reviewId,
      review: {
        ...form,
        userId: "a304959a-76c0-4b34-954a-b38dbf310360",
      },
    });
    setEditing(false);
  };

  return (
    <Review
      user={user}
      review={review}
      onClickSave={handleReviewSave}
      onClickCancle={handleReviewCancel}
      editing={editing}
      setEditing={setEditing}
    />
  );
};
