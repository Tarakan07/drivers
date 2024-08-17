import { configureStore } from "@reduxjs/toolkit";
import driversSlice from "./API/drivers/drivers-slice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PERSIST_CONFIG = {
  key: "drivers",
  storage: AsyncStorage,
};
const persistedDriversReducer = persistReducer(
  PERSIST_CONFIG,
  driversSlice.reducer
);
const store = configureStore({
  reducer: {
    [driversSlice.name]: persistedDriversReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Optionally, ignore these paths in the state
        ignoredPaths: ["register"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
