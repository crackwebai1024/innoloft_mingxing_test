import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  addresult: "",
  addfeedback: "",
  createresult: "",
  createfeedback: "",
};

// get add account response from backend
const getaddresp = (state, action) => {
  state = updateObject(state, {
    addresult: { result: action.result },
    addfeedback: action.feedback,
  });
  return state;
};

// get create account response from backend
const getcreateresp = (state, action) => {
  state = updateObject(state, {
    createresult: { result: action.result },
    createfeedback: action.feedback,
  });
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ADD_RESP:
      return getaddresp(state, action);
    case actionTypes.GET_CREATE_RESP:
      return getcreateresp(state, action);
    default:
      return initialState;
  }
};

export default reducer;
