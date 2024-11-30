import authApi from "./auth";

// Combine all API reducers
export const combinedApiReducers = {
  [authApi.reducerPath]: authApi.reducer,
};

// Combine all API middleware
export const combinedApiMiddlewares = [authApi.middleware];
