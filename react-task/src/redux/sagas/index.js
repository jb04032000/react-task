import { all } from "redux-saga/effects";
import watchGetPostList from "./postListSaga";
import watchGetUsersList from "./userListSaga";

export default function* rootSaga() {
  yield all([watchGetUsersList(), watchGetPostList()]);
}
