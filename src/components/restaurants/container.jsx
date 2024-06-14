import { Restaurants } from "./component";
import { useGetRestaurantsQuery, useGetUsersQuery } from "../../redux/service/api";

export const RestaurantsContainer = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRestaurants());
  // }, [dispatch]);

  // const restaurantsIds = useSelector(selectRestaurantIds);



  // if (isLoading || isFetching) {
  //   return <div>Loading...</div>;
  // }

  // if (!restaurants || !restaurants?.length) {
  //   return null;
  // }

  

  return <Restaurants />;
};
