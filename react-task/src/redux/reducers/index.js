import { combineReducers } from "redux";
import usersList from "./usersList";
import postsList from "./postsList";

const rootReducer = combineReducers({ usersList, postsList });

export default rootReducer;
