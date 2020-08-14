export const CHARTDATA = "CHARTDATA";

export const chartDataAction = value => dispatch => {
  dispatch({ type: CHARTDATA, payload: value });
};
