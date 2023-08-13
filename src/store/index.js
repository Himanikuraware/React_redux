// createstore is deprecated that's why we have to import legacy_createStore instead of createStore.
import { legacy_createStore as createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
