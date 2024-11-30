import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default to localStorage
import { combineReducers } from "redux";

import combinedSlicesReducers from "./slices";
import { combinedApiReducers, combinedApiMiddlewares } from "../services";

const rootReducer = combineReducers({
  ...combinedSlicesReducers,
  ...combinedApiReducers,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"], // slices that should be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...combinedApiMiddlewares), // Add the API middleware,
});

const persistor = persistStore(store);

export { store, persistor };
