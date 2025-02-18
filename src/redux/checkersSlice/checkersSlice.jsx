import { createSlice } from "@reduxjs/toolkit";

const checkersSlice = createSlice({
  name: "checkers",
  initialState: { checkers: "checkers" },
  reducers: {},
});

// export const {} = checkersSlice.actions;
// export const selectCheckers = (state) => state.checkers.checkers;

export default checkersSlice.reducer;
