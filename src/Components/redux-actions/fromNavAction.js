export const FROMNAV = "FROMNAV";

export const fromNav = value => dispatch => {
  dispatch({ type: FROMNAV, payload: value });
};
