import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCard: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,

  reducers: {
    toggleCard: (state) => {
      state.showCard = !state.showCard;
    },
  },
});

export const { toggleCard } =
  notificationSlice.actions;

export default notificationSlice.reducer;