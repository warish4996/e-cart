import axios from "axios";
import { signUpUrl } from "../../../utility/url";

/**
 * Action function for signUp
 * @param  {Object} payload api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const signUp = (payload, callBackConfirmation) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        data: payload,
        url: `${signUpUrl}`,
      });
      callBackConfirmation(response);
    } catch (error) {
      const { response } = error;
      callBackConfirmation(response);
    }
  };
};
