import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { backgroundColor: "white", textColor: "black" },
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeBackground: (state, action) => {
      state.value.backgroundColor = action.payload; // immer regaman pe aya ama bkain
    },
    changeText: (state, action) => {
      state.value.textColor = action.payload;
    },
  },
});

export const { changeBackground, changeText } = themeSlice.actions;
export default themeSlice.reducer;
