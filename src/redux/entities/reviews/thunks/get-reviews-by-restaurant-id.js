import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors";
import { selectRestauranReviewIds } from "../../restaurants/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestauranReviewIds(state, restaurantId);

      return restaurantReviewIds.some((id) => !loadedReviewIds.includes(id));
    },
  },
);
