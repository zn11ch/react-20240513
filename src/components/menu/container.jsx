import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data: dishes, isLoading } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
