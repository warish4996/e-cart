import axios from "axios";
import {
  adminProductUrl,
  removeAdminProductUrl,
  addAdminProductUrl,
  editAdminProductUrl,
} from "../../../utility/url";
import * as actionTypes from "../actionType/actionType";

/**
 * Action function for Admin
 */

export const adminProduct = () => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${adminProductUrl}`,
      });
      dispatch({
        type: actionTypes.ADMIN_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;
      dispatch({
        type: actionTypes.ADMIN_PRODUCT,
        payload: response.data,
      });
    }
  };
};

/**
 * Action function for Remove  product
 * @param  {String} userId header ID
 * @param  {function} callBackConfirmation callback function
 */

export const removeAdminProduct = (userId, callBackConfirmation) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "GET",
        headers: header,
        url: `${removeAdminProductUrl}${userId}`,
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
 * Action function for add product
 * @param  {Object} data api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const addAdminProduct = (data, callBackConfirmationAddProduct) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "POST",
        headers: header,
        data: data,
        url: `${addAdminProductUrl}`,
      });
      callBackConfirmationAddProduct(response);
    } catch (error) {
      callBackConfirmationAddProduct(error);
    }
  };
};

/**
 * Action function for edit product
 * @param  {Object} data api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const editAdminProduct = (data, callBackConfirmationEditProduct) => {
  return async (dispatch) => {
    const id = JSON.parse(window.localStorage.getItem("login")).data.userId;
    const header = { userid: id };
    try {
      const response = await axios({
        method: "POST",
        headers: header,
        data: data,
        url: `${editAdminProductUrl}`,
      });
      callBackConfirmationEditProduct(response);
    } catch (error) {
      callBackConfirmationEditProduct(error);
    }
  };
};
