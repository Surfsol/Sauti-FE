export const CLEAR_APPLY_SUCCESS = "CLEAR_APPLY_SUCCESS";

export const clearApplyAction = value => dispatch => {
  console.log("clear apply action", value);
  dispatch({ type: CLEAR_APPLY_SUCCESS, payload: value });
};
