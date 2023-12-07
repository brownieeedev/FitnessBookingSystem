import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
type NavigationState = {
  next: boolean;
  previous: boolean;
};

// Define the initial state using that type
const initialState: NavigationState = {
  next: true,
  previous: false,
};

export const bottomNavigationSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    allowNext: (state) => {
      state.next = true;
    },
    disableNext: (state) => {
      state.next = false;
    },
    allowPrevious: (state) => {
      state.previous = true;
    },
    disablePrevious: (state) => {
      state.previous = false;
    },
  },
});

export const { allowNext, disableNext, allowPrevious, disablePrevious } =
  bottomNavigationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default bottomNavigationSlice.reducer;
