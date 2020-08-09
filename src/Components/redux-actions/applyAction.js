export const APPLY_SUCCESS = "APPLY_SUCCESS";

export const applyAction = value => dispatch => {
  dispatch({ type: APPLY_SUCCESS, payload: value });
};
