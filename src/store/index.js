/**
 * here we will have the main store logic
 */
import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

export default store;
