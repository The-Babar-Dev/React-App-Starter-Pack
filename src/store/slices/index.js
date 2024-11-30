import counterReducer from "./counter";

// Combine all reducers
const combinedSlicesReducers = {
  counter: counterReducer,
};

export default combinedSlicesReducers;
