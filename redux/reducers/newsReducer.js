import { GET_ALL_NEWS, GET_ALL_NEWS_ERR } from '../actions/types';

const initialState = {
  posts: null,
  loading: true,
  err: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_NEWS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case GET_ALL_NEWS_ERR:
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
