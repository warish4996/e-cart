import * as actionTypes from "../actionType/actionType";

/**
 * Reducer initial state
 */
const initialState = {
  adminAllProduct: [],
};

/**
 * Reducer function for admin product actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const adminReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADMIN_PRODUCT:
      return {
        ...state,
        adminAllProduct: payload,
      };
    default:
      return state;
  }
};
