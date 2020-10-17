import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseURL } from "../config";

// receive the feedback from backend
const getCreateResponseData = (result, feedback) => {
  return {
    type: actionTypes.GET_CREATE_RESP,
    result: result,
    feedback: feedback,
  };
};

// send user signup data to the backend
export const CreateAccount = (email, password) => {
  let url = baseURL + "createaccount";
  console.log(url);
  return (dispatch) => {
    axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(getCreateResponseData(true, res.data));
      })
      .catch((err) => {
        dispatch(getCreateResponseData(true, err.data));
      });
  };
};

// receive the feedback from backend
const getAddResponseData = (result, feedback) => {
  return {
    type: actionTypes.GET_ADD_RESP,
    result: result,
    feedback: feedback,
  };
};

// send user signup data to the backend
export const AddAccount = (email, password) => {
  let url = baseURL + "addaccount";
  return (dispatch) => {
    axios
      .post(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(getAddResponseData(true, res.data));
      })
      .catch((err) => {
        dispatch(getAddResponseData(false, err.data));
      });
  };
};
