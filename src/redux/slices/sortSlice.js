import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: null,
};

export const sortSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = sortSlice.actions;

export default sortSlice.reducer;
