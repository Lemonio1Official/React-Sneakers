import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    editCart: (state, action) => {
      if (action.payload.action == "add") state.cart.push(action.payload.item);
      if (action.payload.action == "update")
        state.cart.map((i) => {
          if (i.id == action.payload.id)
            i[action.payload.name] = action.payload.value;
        });
      if (action.payload.action == "remove")
        state.cart = state.cart.filter((i) => i.id != action.payload.id);
    },
  },
});

export const { editCart } = cartSlice.actions;

export default cartSlice.reducer;
