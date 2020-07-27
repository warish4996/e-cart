import * as actionTypes from "../actionType/actionType";

/**
 * Reducer initial state
 */
const initialState = {
  fetchCart: [],
};

/**
 * Reducer function for cart actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_CART:
      return {
        ...state,
        fetchCart: payload,
      };
    default:
      return state;
  }
};
