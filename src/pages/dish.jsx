import { useParams } from "react-router-dom";
import { DishContainer } from "../components/dish/container";
import { useGetDishByIdQuery } from "../redux/service/api";

export const DishPage = () => {
  const { dishId } = useParams();

  const { data: dish, isLoading } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!dish) {
    return <div> No such dish </div>;
  }

  return dish && <DishContainer dish={dish} />;
};
