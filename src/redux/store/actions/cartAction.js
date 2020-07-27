import axios from "axios";
import {
  addToCartUrl,
  fetchCartUrl,
  removeCartProductUrl,
} from "../../../utility/url";
import * as actionTypes from "../actionType/actionType";

/**
 * Action function for Add cart
 * @param  {String} userId ID
 * @param  {function} callBackConfirmation callback function
 */

export const addCart = (userId, callBackConfirmation) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${addToCartUrl}${userId}`,
      });
      callBackConfirmation(response);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      callBackConfirmation(response);
    }
  };
};

/**
 * Action function for fetch Cart Page
 */

export const fetchCart = () => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${fetchCartUrl}`,
      });
      dispatch({
        type: actionTypes.FETCH_CART,
        payload: response.data,
      });
    } catch (error) {
      const { response } = error;
      // const { request, ...errorObject } = response;
      dispatch({
        type: actionTypes.FETCH_CART,
        payload: response,
      });
    }
  };
};

/**
 * Action function for Remove cart product
 * @param  {String} userId header ID
 * @param  {function} callBackConfirmation callback function
 */

export const removeCartProduct = (userId, callBackConfirmation) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${removeCartProductUrl}${userId}`,
      });
      callBackConfirmation(response);
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      callBackConfirmation(response);
    }
  };
};
