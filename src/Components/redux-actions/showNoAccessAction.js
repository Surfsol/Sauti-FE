export const SHOWNOACCESS_SUCCESS = "SHOWNOACCESS_SUCCESS";

export const showNoAccessAction = value => dispatch => {
  dispatch({ type: SHOWNOACCESS_SUCCESS, payload: value });
};
