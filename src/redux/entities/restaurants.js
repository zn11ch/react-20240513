import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../materials/normalized-mock";

export const RestaurantsSlice = createSlice({
   name: "restaurants",
   initialState: {
      entities: normalizedRestaurants.reduce((acc, dishe) => {
         acc[dishe.id] = dishe;
         return acc;
      }, {}),
      ids:  normalizedRestaurants.map(({id}) => id),
   }
   
});