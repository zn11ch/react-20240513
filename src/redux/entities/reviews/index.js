import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: normalizedReviews.reduce((acc, review) => {
      acc[review.id] = review;
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  },
});
