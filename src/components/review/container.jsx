import { Review } from "./component";
import { useGetUsersQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/selectors";

export const ReviewContainer = ({ review }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectEntityFromResult(review.userId),
  });

  return <Review review={review} userM={user} />;
};
