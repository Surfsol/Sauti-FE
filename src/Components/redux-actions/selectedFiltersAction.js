export const SELECTEDFILTERS = "SELECTEDFILTERS";

export const selectedFiltersAction = values => dispatch => {
  dispatch({ type: SELECTEDFILTERS, payload: values });
};
