import axios from "axios";
import { loginUrl } from "../../../utility/url";

/**
 * Action function for login
 * @param  {Object} payload api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const login = (payload, callBackConfirmation) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        data: payload,
        url: `${loginUrl}`,
      });
      callBackConfirmation(response);
      window.localStorage.setItem("login", JSON.stringify(response));
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response;

      callBackConfirmation(response);
    }
  };
};
