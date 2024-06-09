import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, { payload }) => {
      if (state[payload] === undefined) {
        return;
      }
      state[payload] = state[payload] - 1;

      if(state[payload] < 0) {
        console.log("ADFADFDAF", state)
        delete state[payload]
      }
    },
    clear: () => {},
  },
});


export const { increment, decrement, clear } = CartSlice.actions;