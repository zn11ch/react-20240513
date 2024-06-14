import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";

export const RestaurantTabs = ({ activeRestaurant, onTabClick }) => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurants?.length) {
    return <div>No restaurants</div>;
  }

  return (
    <div className="restaraunt-tabs">
      {restaurants?.map(({ name, id }) => (
        <Tab
          title={name}
          key={id}
          onClick={() => onTabClick(id)}
          className={activeRestaurant === id ? "active" : null}
        />
      ))}
    </div>
  );
};
