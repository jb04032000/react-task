import * as ActionTypes from "../../basic/constants/actionTypes";

export function getUsersList() {
  return {
    type: ActionTypes.GET_USERS_LIST_REQUEST,
  };
}

export function getPostsList() {
  return {
    type: ActionTypes.GET_POSTS_LIST_REQUEST,
  };
}
