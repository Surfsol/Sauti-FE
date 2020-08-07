export const COMPARE = "COMPARE";

export const compareSubSamples = values => dispatch => {
  dispatch({ type: COMPARE, payload: values });
};
