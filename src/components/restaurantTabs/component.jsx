import { useSearchParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";

export const RestaurantTabs = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurants?.length) {
    return <div>No restaurants</div>;
  }

  return (
    <div className="restaraunt-tabs">
      <input
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      {restaurants
        .filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
        )
        .map(({ name, id }) => (
          <Tab title={name} key={id} to={`${id}`} />
        ))}
    </div>
  );
};
