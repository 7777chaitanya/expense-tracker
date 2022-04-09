import { combineReducers } from "redux";
import accountBalanceReducer from "./accountBalanceReducer";

const rootReducer = combineReducers({
    accountBalance : accountBalanceReducer
})

export default rootReducer;
