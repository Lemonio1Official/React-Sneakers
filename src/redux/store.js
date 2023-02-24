import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./slices/sortSlice";
import sneakersSlice from "./slices/sneakersSlice";
import cartSlice from "./slices/cartSlice";
import popupSlice from "./slices/popupSlice";

export const store = configureStore({
  reducer: {
    sortSlice,
    sneakersSlice,
    cartSlice,
    popupSlice,
  },
});
