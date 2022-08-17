import * as ActionTypes from "../../basic/constants/actionTypes";

const initialState = {
  error: null,
  loading: false,
  posts: [],
};

const getPostsList = (state, action) => ({
  ...state,
  loading: true,
  error: null,
});

const getPostsListSuccess = (state, action) => {
  if (action.payload) {
    return { ...state, posts: action.payload, error: null, loading: false };
  }
};

const getPostsListFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
};

export default function postsList(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_POSTS_LIST_REQUEST:
      return getPostsList(state, action);
    case ActionTypes.GET_POSTS_LIST_SUCCESS:
      return getPostsListSuccess(state, action);
    case ActionTypes.GET_POSTS_LIST_FAIL:
      return getPostsListFail(state, action);
    default:
      return state;
  }
}
