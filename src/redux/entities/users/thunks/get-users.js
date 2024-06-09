import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsersB", async () => {
  const response = await fetch("http://localhost:3001/api/users");

  return response.json();
});
