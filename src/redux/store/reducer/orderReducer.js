import * as actionTypes from "../actionType/actionType";

/**
 * Reducer initial state
 */
const initialState = {
  orderFetch: {},
};

/**
 * Reducer function for order Fetch actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const orderFetchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ORDER_FETCH:
      return {
        ...state,
        orderFetch: payload,
      };
    default:
      return state;
  }
};
