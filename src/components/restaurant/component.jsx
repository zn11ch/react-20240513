import { Outlet, useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/selectors";
import { Tab } from "../tab/component";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!restaurant) {
    return <div>No restaurant</div>;
  }

  return (
    <div className="restaurant">
      <div>
        <h2>
          <a href="#"> {restaurant.name}</a>
        </h2>

        <Tab title="Menu" to={`/restaurants/${restaurantId}/menu`} />
        <Tab title="Reviews" to={`/restaurants/${restaurantId}/reviews`} />

        <Outlet />
      </div>
    </div>
  );
};
