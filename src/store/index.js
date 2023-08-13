// createstore is deprecated that's why we have to import legacy_createStore instead of createStore.
// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

//slice.actions can reate a unique types of actions itself we don't have to define like redux. 'increment' or something.

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export default store;

/* Created Store using Redux only not redux-toolkit */
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

// export default store;
