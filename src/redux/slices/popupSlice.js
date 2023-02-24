import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "test",
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = popupSlice.actions;

export default popupSlice.reducer;
