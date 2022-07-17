/**
 * here we will have the main store logic
 */
import { createStore } from "redux";
import Reducer from "./reducers";
const store = createStore(Reducer);

export default store;
