import * as actionTypes from "../actionType/actionType";

/**
 * Reducer initial state
 */
const initialState = {
  product: {},
};

/**
 * Reducer function for product actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
