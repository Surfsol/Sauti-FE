export const SHOWNOACCESS_SUCCESS = "SHOWNOACCESS_SUCCESS";

export const showNoAccessAction = value => dispatch => {
  console.log("apply fired action");
  dispatch({ type: SHOWNOACCESS_SUCCESS, payload: value });
};
