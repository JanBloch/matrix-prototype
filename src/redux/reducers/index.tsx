import { combineReducers } from "redux";
import { rectReducer } from "./rect";

const rootReducer = combineReducers({ rectReducer });
export default rootReducer;
