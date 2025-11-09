import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);

    const result = await response.json();

    if (!result) {
      return rejectWithValue("no data");
    }

    return result;
  }
);
