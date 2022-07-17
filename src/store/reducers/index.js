import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  CounterReducer: CounterReducer,
  UserReducer: UserReducer,
});

/**
 * Here combineReducers have ({
 * filename:functionName})
 */
