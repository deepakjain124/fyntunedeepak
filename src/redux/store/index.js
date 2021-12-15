import { combineReducers } from "redux";
import { createStore } from "redux";
import { expenseReducer } from "../reducers/expense";
const initialstate = {};
const reducer = combineReducers({
  expenses: expenseReducer,
});
const store = createStore(reducer);
export default store;
