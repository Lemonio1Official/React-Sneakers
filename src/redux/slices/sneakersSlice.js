import { createSlice } from "@reduxjs/toolkit";

import s1 from "../../images/1.jpg";
import s2 from "../../images/2.jpg";
import s3 from "../../images/3.jpg";
import s4 from "../../images/4.jpg";
import s5 from "../../images/5.jpg";
import s6 from "../../images/6.jpg";
import s7 from "../../images/1.jpg";
import s8 from "../../images/5.jpg";

const initialState = {
  sneakers: [],
};

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSneakers: (state, action) => {
      state.sneakers = action.payload;
    },
  },
});

export const { setSneakers } = sneakersSlice.actions;

export default sneakersSlice.reducer;
