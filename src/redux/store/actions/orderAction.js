import axios from "axios";
import { orderMakingUrl, orderFetchUrl } from "../../../utility/url";
import * as actionTypes from "../actionType/actionType";

/**
 * Action function for orderMaking
 * @param  {Object} payload api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const orderMaking = (callBackConfirmation) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${orderMakingUrl}`,
      });
      callBackConfirmation(response);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;

      callBackConfirmation(response);
    }
  };
};

export const orderFetch = () => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${orderFetchUrl}`,
      });
      dispatch({
        type: actionTypes.ORDER_FETCH,
        payload: response,
      });
    } catch (error) {
      const { response } = error;
      dispatch({
        type: actionTypes.ORDER_FETCH,
        payload: response,
      });
    }
  };
};
