import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";

export const DishesSlice = createSlice({
  name: "dishes",
  initialState: {
    entities: normalizedDishes.reduce((acc, dishe) => {
      acc[dishe.id] = dishe;
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  },
});
