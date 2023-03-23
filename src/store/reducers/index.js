import { initialState } from "./initialState";
import contactDetailsReducer from "./contactDetailsReducer";

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  contactDetails: contactDetailsReducer,
});

export { initialState, appReducers };
