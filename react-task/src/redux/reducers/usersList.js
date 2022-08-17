import * as ActionTypes from "../../basic/constants/actionTypes";

const initialState = {
  error: null,
  loading: false,
  users: [],
};

const getUserList = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const getUserListSuccess = (state, action) => {
  if (action.payload) {
    return { ...state, users: action.payload, error: null, loading: false };
  }
};

const getUserListFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export default function usersList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS_LIST_REQUEST:
      return getUserList(state, action);
    case ActionTypes.GET_USERS_LIST_SUCCESS:
      return getUserListSuccess(state, action);
    case ActionTypes.GET_USERS_LIST_FAIL:
      return getUserListFail(state, action);
    default:
      return state;
  }
}
