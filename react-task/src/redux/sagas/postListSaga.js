import { call, put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../../basic/constants/actionTypes";
import { getPostsList } from "../services/postsList.service";

function* workerGetPostsList(action) {
  try {
    const response = yield call(getPostsList);
    const res_body = response ? response : {};
    const res_status = res_body.success;

    if (res_status) {
      yield put({
        type: ActionTypes.GET_POSTS_LIST_SUCCESS,
        payload: res_body.data,
      });
    } else {
      yield put({
        type: ActionTypes.GET_POSTS_LIST_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: ActionTypes.GET_POSTS_LIST_FAIL, message: err.message });
  }
}

function* watchGetPostList() {
  yield takeLatest(ActionTypes.GET_POSTS_LIST_REQUEST, workerGetPostsList);
}

export default watchGetPostList;
