import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appApi } from "../features/api";

export const store = configureStore({
  reducer: { [appApi.reducerPath]: appApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
