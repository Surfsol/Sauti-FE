export const BUTTONS_SUCCESS = "BUTTONS_SUCCESS";

export const buttonsAction = value => dispatch => {
  dispatch({ type: BUTTONS_SUCCESS, payload: value });
};
