import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk("dishes/getDishes", async () => {
  const response = await fetch("http://localhost:3001/api/dishes");
  return response.json();
});
