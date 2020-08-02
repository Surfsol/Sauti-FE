export const QUERIES_SUCCESS = "QUERIES_SUCCESS";

export const queriesFilters = value => dispatch => {
  console.log("queries Action fired");
  dispatch({ type: QUERIES_SUCCESS, payload: value });
};
