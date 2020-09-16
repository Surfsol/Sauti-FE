import { dispatch } from "d3";

export const LABELS_SUCCESS = "LABELS_SUCCESS";

export const catLabelsAction = value => dispatch => {
  console.log("cat action", value);
  dispatch({ type: LABELS_SUCCESS, payload: value });
};
