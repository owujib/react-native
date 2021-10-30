import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productReducer from './productReducer';

export default combineReducers({
  posts: newsReducer,
  products: productReducer,
});
