import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./ui/cart";
import { RequestSlice } from "./ui/request";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(CartSlice, RequestSlice, apiService),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

console.log(store.getState());
