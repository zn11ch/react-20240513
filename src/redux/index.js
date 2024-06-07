import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishesSlice } from "./entities/dishes";
import { RestaurantsSlice } from "./entities/restaurants";
import { UsersSlice } from "./entities/users";
import { ReviewsSlice } from "./entities/reviews";

export const store = configureStore({
  reducer: combineSlices(
    DishesSlice,
    RestaurantsSlice,
    UsersSlice,
    ReviewsSlice,
  ),
});

console.log(store.getState());
