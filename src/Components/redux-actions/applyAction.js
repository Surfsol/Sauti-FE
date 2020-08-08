export const APPLY_SUCCESS = "APPLY_SUCCESS";

export const applyAction = value => dispatch => {
  console.log("apply fired action", value);
  dispatch({ type: APPLY_SUCCESS, payload: value });
};
