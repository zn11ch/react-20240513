import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishesSlice } from "./entities/dishes";
import { RestaurantsSlice } from "./entities/restaurants";
import { ReviewsSlice } from "./entities/reviews";
import { UsersSlice } from "./entities/users";

export const store = configureStore({
  reducer: combineSlices(DishesSlice, RestaurantsSlice, ReviewsSlice, UsersSlice),
});

console.log(store.getState());