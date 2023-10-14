import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Stock } from "../../../types/client-interfaces";
import { apiURL } from "../../../services/api";

interface StocksState {
  data: Stock[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: StocksState = {
  data: [],
  status: "idle",
  error: undefined,
};

export const fetchTargetPrices = createAsyncThunk(
  "stocks/fetchTargetPrices",
  async () => {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Failed to fetch target prices");
    }
    const data: Stock[] = await response.json();
    console.log("data", data);
    return data;
  }
);

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTargetPrices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTargetPrices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTargetPrices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default stocksSlice.reducer;
