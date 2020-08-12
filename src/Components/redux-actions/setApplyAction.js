export const SETAPPLY_SUCCESS = "SETAPPLY_SUCCESS";

export const setApplyAction = value => dispatch => {
  dispatch({ type: SETAPPLY_SUCCESS, payload: value });
};
