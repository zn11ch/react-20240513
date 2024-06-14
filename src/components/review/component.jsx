import { ReviewForm } from "../reviewForm/component";

import { useUser } from "../../contexts/user/hooks";

export const Review = ({
  review,
  user,
  onClickSave,
  onClickCancel,
  editing,
  setEditing,
}) => {
  const { user: authUser } = useUser();

  return editing ? (
    <ReviewForm
      initialValue={review}
      onClickSave={onClickSave}
      onClickCancel={onClickCancel}
    />
  ) : (
    <div className="review">
      <div key={review.id}>
        {user ? `User: ${user.name},` : ""} Review:{" "}
        {review.text ? review.text : "no review yet"}, Rating:{" "}
        {review.rating ? review.rating : "no rating"}
        {authUser ? (
          <button onClick={() => setEditing(true)}>Edit</button>
        ) : null}
      </div>
    </div>
  );
};
