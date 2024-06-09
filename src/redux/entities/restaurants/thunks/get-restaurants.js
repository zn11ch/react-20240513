import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRestaurants = createAsyncThunk("restaurants/getRestaurants",
 async () => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    return response.json();
 });