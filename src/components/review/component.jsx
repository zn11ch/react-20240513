import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/selectors";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));
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
