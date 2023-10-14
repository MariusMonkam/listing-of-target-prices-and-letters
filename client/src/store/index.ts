// store/index.ts

import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "../app/features/stocks/stocksSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    // Add other reducers here if you have them
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//Writing these here to prevent defining the types in every file
export const useAppDispatch = () => useDispatch<AppDispatch>(); //This is used to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// Used to get the data from the store in the component
export default store;
