import { LIST_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from '../actions/types';

const initialState = {
  products: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
