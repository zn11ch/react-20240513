import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUS } from "./constants";

export const RequestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.pending,
          };
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.rejected,
          };
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = {
            status: REQUEST_STATUS.fulfilled,
          };
        },
      ),
});
