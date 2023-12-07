import { configureStore } from "@reduxjs/toolkit";

//Reducers
import bottomNavReducer from "./slices/bottomNavigationSlice";

export const store = configureStore({
  reducer: {
    bottomNav: bottomNavReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
