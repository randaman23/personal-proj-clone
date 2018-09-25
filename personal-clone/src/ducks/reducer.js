const initialState = {
  users: {},
  cart: [],
  count: 0
};

const GET_USER_DATA = "GET_USER_DATA";
const ADD_TO_CART = "ADD_TO_CART";
const CART_COUNT = "CART_COUNT";

export function getUserData(data) {
  return {
    type: GET_USER_DATA,
    payload: data
  };
}

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data
  };
}

export function cartCount(data) {
  return {
    type: CART_COUNT,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return Object.assign({}, state, { user: action.payload });
    case ADD_TO_CART:
      return Object.assign({}, state, { cart: action.payload });
    case CART_COUNT:
      return Object.assign({}, state, { count: action.payload });
    default:
      return state;
  }
}
