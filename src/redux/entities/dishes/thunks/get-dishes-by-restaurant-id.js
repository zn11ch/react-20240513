import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestauranDishIds } from "../../restaurants/selectors";
// import { selectDishIds } from "../selectors";
// import { selectRestauranDishIds } from "../../restaurants/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestauranDishIds(state, restaurantId);

      return restaurantDishIds.some((id) => !loadedDishIds.includes(id));
    },
  }
);
