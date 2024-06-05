import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { DishesSlice } from "./entities/dishes";
import { RestarauntsSlice } from "./entities/restaurants";
import { ReviewsSlice } from "./entities/reviews";
import { UsersSlice } from "./entities/users";

export const store = configureStore({
  reducer: combineSlices(DishesSlice, RestarauntsSlice, ReviewsSlice, UsersSlice),
});

console.log(store.getState());
