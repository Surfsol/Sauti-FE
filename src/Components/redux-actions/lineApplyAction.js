export const LINE_APPLY_SUCCESS = "LINE_APPLY_SUCCESS";

export const line_applyAction = () => dispatch => {
  console.log("line_apply fired action");
  dispatch({ type: LINE_APPLY_SUCCESS });
};
