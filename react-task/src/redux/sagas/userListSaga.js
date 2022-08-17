import { call, put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "../../basic/constants/actionTypes";
import { getUsersList } from "../services/usersList.service";

function* workerGetUsersList(action) {
  try {
    const response = yield call(getUsersList);
    const res_body = response ? response : {};
    const res_status = res_body.success;

    if (res_status) {
      yield put({
        type: ActionTypes.GET_USERS_LIST_SUCCESS,
        payload: res_body.data,
      });
    } else {
      yield put({
        type: ActionTypes.GET_USERS_LIST_FAIL,
        payload: res_body,
      });
    }
  } catch (err) {
    yield put({ type: ActionTypes.GET_USERS_LIST_FAIL, message: err.message });
  }
}

function* watchGetUsersList() {
  yield takeLatest(ActionTypes.GET_USERS_LIST_REQUEST, workerGetUsersList);
}

export default watchGetUsersList;
