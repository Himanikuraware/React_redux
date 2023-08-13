// createstore is deprecated that's why we have to import legacy_createStore instead of createStore.
// import { legacy_createStore as createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // We can mutate the state directly in redux toolkit because internally it doesn't mutate the state because it uses imgur package internally.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case "increase":
//       return {
//         ...state,
//         counter: state.counter + action.value,
//       };
//     case "decrement":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case "toggle":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);'

//slice.actions can reate a unique types of actions itself we don;t have to define like redux. 'increment' or something.

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
