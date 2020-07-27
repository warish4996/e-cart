import axios from "axios";
import { productsUrl } from "../../../utility/url";
import * as actionTypes from "../actionType/actionType";

/**
 * Action function for get all team members
 * @param  {function} callBackConfirmation callback function
 */

export const allProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${productsUrl}`,
      });

      dispatch({
        type: actionTypes.PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;

      dispatch({
        type: actionTypes.PRODUCT,
        payload: response.data,
      });
    }
  };
};
